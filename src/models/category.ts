import storage, { load } from '@/config/storage';
import axios from 'axios';
import { Effect, Model, SubscriptionsMapObject } from 'dva-core-ts';
import { Reducer } from 'redux';

import { RootState } from '.';


//  声明一个 category url
const CATEGORY_URL='/mock/11/bear/category';

// 3.设置数组没项,有哪些属性:

export interface ICategory {
    id: string;
    name: string;
    classify?: string; // 分组,不一定都分了.加个?;
}

// 2. state 分为:我的分类, 所有分类     //   少了中括号,,所有下面的 state 报错.
interface CategoryModelState {
    // 4.右上角按钮: 编辑 ; 转到 models -> category.ts 定义编辑的状态: isEdit
    isEdit: boolean;
    myCategorys: ICategory[]; // 这个数组的每一项又是什么呢, 转 3 定义 ICategory 有哪些属性;
    categorys: ICategory[];
}
 
// 1.先声明一个 model 接口,继承与 dva 中的  Model
interface CategoryModel extends Model {
    namespace: 'category';
    state: CategoryModelState; // 上面 2 定义.
    // 4. reducers
    reducers:{
        setState: Reducer<CategoryModelState>, // Reducer从 redux 里导入. 他能接收个泛型(action)
    },
    // 5. effects 异步加载数据
    effects: { // 先定义个异步加载 数据函数,等会到 storage获取
        loadData: Effect;

        // 6.右上角按钮: 编辑 ; 转到 models -> category.ts 定义编辑的状态: isEdit ; // 声明函数 toggle: Effect; 这个函数起切换 编辑/完成 状态用的.
        toggle: Effect; // 这个函数起切换 编辑/完成 状态用的.
    }, 
    // 6.订阅,用来订阅数据源,去调用相应的 action, 这里的作用减少去请求数据的接口
    subscriptions: SubscriptionsMapObject,
}

// 7. 定义一个初始数据;
const initialState:CategoryModelState = {
    // 5.右上角按钮: 编辑 ; 转到 models -> category.ts 定义编辑的状态: isEdit
    isEdit: false, // 转 上 effects 里声明 toggle: Effect;
    myCategorys: [ // 这里不是空的数组. 起始值有: 推荐, vip
        {
            id:'home',
            name: '推荐',
        },
        {
            id: 'vip',
            name: 'Vip',
        },
    ], 
    categorys:[],
}


// 8.声明个 categoryModel 
const categoryModel: CategoryModel = {
    namespace: 'category',
    state: initialState,
    reducers: {
        setState(state, {payload}) {
            return {
                ...state,
                ...payload,
            }
        }
    },
    effects: {
        *loadData({payload}, {call, put}) {
            // 从 storage 里获取数据;  // storage 里的 load 继承 LoadParams, 有 KEY 的属性.
            const myCategorys = yield call(load, {key: 'myCategorys'});  // 从 storage.ts 里拿到 我的分类 的数据;
            const categorys = yield call(load, {key:'categorys'});      // 从 storage.ts 里拿到 所有分类 的数据; 
            
            // 发起一个 action, 将数据保存到 state 里; 要先判断 myCategorys 存在不存在,存在,再发起 action;
            if(myCategorys) {
                yield put({
                    type: 'setState',
                    payload: {
                        myCategorys, // 这条如果不执行的话,就不会从 storage.ts 里 读取数据过来, app 上也只会显示 2 个 tab 推荐 和 vip
                        categorys,
                    },
                });
            } else { // 如果不存在,只保存 所有分类;
                yield put({
                    type: 'setState',
                    payload: {
                        // myCategorys, // 错在这里,,,// 如果不存在,只保存 所有分类; ,我把我的分类也加入了.
                        categorys,
                    },
                });
            }
        },

        // 7.右上角按钮: 编辑 ; 转到 models -> category.ts 定义编辑的状态: isEdit ; // 声明函数 toggle: Effect; 
        *toggle({payload},{put, select}) { // 将有副作用的放到这个函数里
            const category = yield select(({category}: RootState) => category);
            yield put({
                type: 'setState',
                payload: { // payload 传递参数 取反
                    isEdit: !category.isEdit, // 执行以下,取反,赋给 isEdit;
                    // 30.新增类别 和 删除类别; 将数据 保存到 本地存储中, 并保存到 dva 仓库里; 同样,我的分类 的数据也要保存到 本地的 dva 仓库里面;
                    myCategorys: payload.myCategorys,
                }
            });

            // 30.新增类别 和 删除类别; 将数据 保存到 本地存储中, 并保存到 dva 仓库里; 如果分类处于编辑状态, storage.save()
            if( category.isEdit) {
                storage.save({
                    key: 'myCategorys',
                    data: payload.myCategorys,
                })
            }

        }, // 8.右上角按钮: 编辑 ;接下来是去 HeaderRightBtn.tsx 页面,给按钮添加点击事件,执行这个 action
    },
    subscriptions: { // 只要被加载,就会执行这个 dispatch
        setup({dispatch}) { // setup 这个名字可以随便取. setup 改成 subscriptionsDispatch;
            dispatch({type:'loadData'})
        },
        // 这里再定义一个 同步数据,给  config -> storage 里的 sync:{} 使用. 
        asyncStorage() {
            // 实际上, 下面 2 个函数 , 也可以定义在 外面的 export 的上面.并不一定 一定要定义在这里;
            // categorys
            storage.sync.categorys = async () => { // async关键字声明 异步函数,  ES7 异步; 
                //原理: 封装了自动执行器的一个生成器函数,并且会返回一个 promise 对象.
                const {data} = await axios.get(CATEGORY_URL); // 最上面 声明 CATEGORY_URL
                // console.log(data.data);// 里面是 {status:100, msg:'', data:[]}
                return data; // 所以这里使用,data.data.  
                // 要么使用下面这样
                // const {data} = await axios.get(CATEGORY_URL); // 这里 data 使用对象解构. 加个大括号;
                // return data;
            }

            // myCategorys // 直接返回 null 因为 myCategorys, 并不保存到后台去,只保存在本地.
            storage.sync.myCategorys = async () => {
                return null; // 直接返回 null 因为 myCategorys, 并不保存到后台去,只保存在本地.
            }
        }

    },
}


export default categoryModel; // 再到 models -> index.ts 引入这个 category model;



/**
export interface Model {
  namespace: string;
  state?: any;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}

export interface LoadParams {
	key: string;
	id?: string;
	autoSync?: boolean;
	syncInBackground?: boolean;
	syncParams?: any;
}

 * 
 * 
 * {
      "id": "2",
      "name": "小说",      
      "classify": "推荐"   // classify 属于哪个小组. (推荐,知识,娱乐,生活这些组.)
    },
 */