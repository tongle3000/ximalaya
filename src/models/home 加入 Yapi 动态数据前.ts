import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';

/**
 * HomeModle
 * 供 config dva.ts 引用.
 */

// Reducer
interface HomeState {
	num: number;
}

// 声明接口
interface HomeModel extends Model {
    namespace: 'home'; // namespace: string;
    
	state: {
		//state?: any;
		num: number;
    };
    
	// reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
	reducers: {
		add: Reducer<HomeState>; // 到上面声明个
    };
    
	// effects?: EffectsMapObject;
	effects: {
		// 里面定义一个 action
		asyncAdd: Effect;
    };
    
	// subscriptions?: SubscriptionsMapObject;
}

// 下面 state 报 "HomeState | undefined"
// 这里可以把 state 提出去,顶一个初始的 state
const initialState = {
	num: 0,
	loading: false, // 添加个加载状态, 默认是 false
}

// 延迟函数, 模拟异步的.
function delay(timeout: number) {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	})
}

const homeModel: HomeModel = { // 报"在此处声明了 "effects" 错误, 先把上面effects 注释了, effects是异步,先做同步的.
	namespace: 'home',
	state: {
		num: 1,
	},
	reducers: {
		add(state=initialState, { payload /* ,type */ }) {
            // dva 已经帮我们处理了 action, 可以通过结构的方法直接取到; 如果需要 type 可以写上

            // payload 会返回一个对象
            return {
                ...state, // 旧的 state
                num: state.num + payload.num, // 新的属性; 以前的 + 新的payload.num
				// state 报 "HomeState | undefined", 可以把 state 提出去,顶一个初始的 state, 上面个 state 一个默认值 state=initialState
				                        
            }
		},
	},
	effects: {
		*asyncAdd({payload}, {call, put}) { // action 改 {payload}
			yield call(delay, 3000); // 调用上面的方法, 第 2 个参数 3000
			yield put({ // put 接收 action
				type: 'add',
				payload, // 这个不做处理,直接传进来
			});
		}
	},
};

export default homeModel;
