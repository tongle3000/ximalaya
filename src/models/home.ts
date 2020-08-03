import axios from 'axios';
import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';


// 轮播图
const CAROUSEL_URL = '/mock/11/bear/carousel'; // ② 加入动态数据 yapi; 数据的接口的 后面部分的 地址.

// ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩
// ① 猜你喜欢模块
const Guess_URL = '/mock/11/bear/guess';

// ② 猜你喜欢模块
export interface IGUESS {
	id: string;
	image: string;
	title: string;
}

// ④ 加入动态数据 yapi;   13 步 增加export 供 Home -> Carousel.tsx 使用.
export interface ICarousel {
	id: string;
	image: string;
	colors: [string, string];
}

// Reducer
interface HomeState {
	carousels: ICarousel[]; // ③ 加入动态数据 yapi; 第四步,定义这个的类型 包括哪些属性.
	guess: IGUESS[]; // ③ 猜你喜欢模块
}

// 声明接口
interface HomeModel extends Model {
    namespace: 'home'; // namespace: string;
    
	state: HomeState; // ③ 加入动态数据 yapi;
    
	// reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
	reducers: {
		// add: Reducer<HomeState>; // 到上面声明个 
		setState: Reducer<HomeState>; // ⑤ 加入动态数据 yapi;  add 改成 setState
    };
    
	// effects?: EffectsMapObject;
	effects: {
		// 里面定义一个 action
		// asyncAdd: Effect; 
		fetchCarousels: Effect;     // ⑥ 加入动态数据 yapi; 
		fetchGuess: Effect;  // ④ 猜你喜欢模块
    };
    
	// subscriptions?: SubscriptionsMapObject;
}

// 下面 state 报 "HomeState | undefined"
// 这里可以把 state 提出去,顶一个初始的 state
const initialState = {
	// num: 0,
	carousels: [], // ⑦ 加入动态数据 yapi;  轮播图初始值, 我们给个空的数组.
	loading: false, // 添加个加载状态, 默认是 false, 所以可以注释掉.
	guess: [],// ⑤ 猜你喜欢模块
}

// 延迟函数, 模拟异步的.
// function delay(timeout: number) {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, timeout);
// 	})
// }

const homeModel: HomeModel = { // 报"在此处声明了 "effects" 错误, 先把上面effects 注释了, effects是异步,先做同步的.
	namespace: 'home',
	state: initialState,
	reducers: {  // 万能 reducer
		setState(state = initialState, { payload /* ,type */ }) {  // ⑦ 加入动态数据 yapi; add 我们已经改成了 setState
            // dva 已经帮我们处理了 action, 可以通过结构的方法直接取到; 如果需要 type 可以写上

            // payload 会返回一个对象
            return {
				...state, // 旧的 state
				
				// ⑧ 加入动态数据 yapi;   下面这个这个加就不用了, 注释掉; ...payload 加进来
				// num: state.num + payload.num, // 新的属性; 以前的 + 新的payload.num
				...payload,

				// state 报 "HomeState | undefined", 可以把 state 提出去,顶一个初始的 state, 上面个 state 一个默认值 state=initialState
				                        
            }
		},
	},
	effects: {
		
		// *asyncAdd({payload}, {call, put}) { // action 改 {payload}
		// 	yield call(delay, 3000); // 调用上面的方法, 第 2 个参数 3000
		// 	yield put({ // put 接收 action
		// 		type: 'add',
		// 		payload, // 这个不做处理,直接传进来
		// 	});
		// }
		// 上面的改为: 
		// ⑨ 加入动态数据 yapi; fetchCarousels: 请求轮播图的一个异步请求  的 action. 
		// 还需要个 action 触发这个请求.pages -> Home -> index.tsx 文件 的 Home 组件里
		*fetchCarousels(_, {call, put}) { // "_" 占位置的入参
			// 改成: ajax 请求
			const { data/*, state, msg */ } = yield call(axios.get, CAROUSEL_URL); // get, 请求地址,
			console.log('轮播图数据: ', data);
			yield put({
				type: 'setState',
				payload: {
					carousels: data,
				}
			})
		},
		
		// ⑥ 猜你喜欢模块; 写个生成器的函数;
		*fetchGuess(_, {call, put}) {
			const {data} = yield call(axios.get, Guess_URL);
			yield put({
				type: 'setState',
				payload: {
					guess: data,
				}
			});
		}
	},
};

export default homeModel;
