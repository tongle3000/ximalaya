import { RootState } from '@/models';
import axios from 'axios';
import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';

// 轮播图
const CAROUSEL_URL = '/mock/11/bear/carousel'; // ② 加入动态数据 yapi; 数据的接口的 后面部分的 地址.

// ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩
// ① 猜你喜欢模块
const GUESS_URL = '/mock/11/bear/guess';

// ①首页列表
const CHANNEL_URL = '/mock/11/bear/channel';

// ② 猜你喜欢模块
export interface IGuess {
	id: string;
	image: string;
	title: string;
}

// ②首页列表
export interface IChannel {
	id: string;
	title: string;
	image: string;
	remark: string;
	played: number;
	playing: number;
}

// ④ 加入动态数据 yapi;   13 步 增加export 供 Home -> Carousel.tsx 使用.
export interface ICarousel {
	id: string;
	image: string;
	colors: [string, string];
}

// 9.上拉加载更多; 加页码, 判断 上拉加载更多的时候,能不能加载更多.
export interface IPagination {
	current: number;
	total: number;
	hasMore: boolean; // 判断能否再加载?
}



export interface HomeState {
	carousels: ICarousel[]; // ③ 加入动态数据 yapi; 第四步,定义这个的类型 包括哪些属性.
	activeCarouselIndex: number; // 1.activeCarouselIndex 修改显示的圆点的状态(当前轮播图下标),数据从 home.ts 里取. 不报错在这个组件内.
	guess: IGuess[]; // ③ 猜你喜欢模块
	channels: IChannel[]; // ③首页列表
	// isTransition: boolean;
	pagination: IPagination; // 10.上拉加载更多;
	gradientVisible: boolean; // 4.设置滚动上去渐变背景色消失; gradientVisible要再 Models -> home.ts 定义个默认值. 
}

// Reducer
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
		fetchCarousels: Effect; // ⑥ 加入动态数据 yapi;
		fetchGuess: Effect; // ④ 猜你喜欢模块
		fetchChannels: Effect; // ④首页列表
	};

	// subscriptions?: SubscriptionsMapObject;
}

// 下面 state 报 "HomeState | undefined"
// 这里可以把 state 提出去,顶一个初始的 state
const initialState: HomeState = {
	// num: 0,
	carousels: [], // ⑦ 加入动态数据 yapi;  轮播图初始值, 我们给个空的数组.
	activeCarouselIndex: 0, // 2.activeCarouselIndex 修改显示的圆点的状态(当前轮播图下标),数据从 home.ts 里取. 不报错在这个组件内.
	// loading: false, // 添加个加载状态, 默认是 false, 所以可以注释掉.
	guess: [], // ⑤ 猜你喜欢模块
	channels: [], // ⑤ 首页列表
	// isTransition: false,
	pagination: { // 11.上拉加载更多; 定义初始值
		current: 1,
		total: 0,
		hasMore: true, // true 设置可加载
	},
	gradientVisible: true, // 5.设置滚动上去渐变背景色消失; gradientVisible要再 Models -> home.ts 定义个默认值.
};

// 延迟函数, 模拟异步的.
// function delay(timeout: number) {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, timeout);
// 	})
// }

const homeModel: HomeModel = {
	// 报"在此处声明了 "effects" 错误, 先把上面effects 注释了, effects是异步,先做同步的.
	namespace: 'home',
	state: initialState,
	reducers: {
		// 万能 reducer
		setState(state = initialState, { payload /* ,type */ }) {
			// ⑦ 加入动态数据 yapi; add 我们已经改成了 setState
			// dva 已经帮我们处理了 action, 可以通过结构的方法直接取到; 如果需要 type 可以写上

			// payload 会返回一个对象
			return {
				...state, // 旧的 state

				// ⑧ 加入动态数据 yapi;   下面这个这个加就不用了, 注释掉; ...payload 加进来
				// num: state.num + payload.num, // 新的属性; 以前的 + 新的payload.num
				...payload,

				// state 报 "HomeState | undefined", 可以把 state 提出去,顶一个初始的 state, 上面个 state 一个默认值 state=initialState
			};
		},
	},
	effects: {
		// ⑨ 加入动态数据 yapi; fetchCarousels: 请求轮播图的一个异步请求  的 action.
		// 还需要个 action 触发这个请求.pages -> Home -> index.tsx 文件 的 Home 组件里
		*fetchCarousels(_, { call, put }) {
			// "_" 占位置的入参
			// 改成: ajax 请求
			const { data /*, state, msg */ } = yield call(
				axios.get,
				CAROUSEL_URL,
			); // get, 请求地址,
			// console.log('轮播图数据: ', data); // 测试用的,能看打印的数据
			yield put({
				type: 'setState',
				payload: {
					carousels: data,
				},
			});
		},

		// ⑥ 猜你喜欢模块; 写个生成器的函数;
		*fetchGuess(_, { call, put }) {
			const { data } = yield call(axios.get, GUESS_URL);
			yield put({
				type: 'setState',
				payload: {
					guess: data, // data.slice(0, 6): 0,1...5 = 6个, .slice(0, 10)= 10 个
				},
			});
		},

		// ⑥ 首页列表 ;
		// 9.下拉刷新;  这里第一个参数是 action, 就是 index.tsx dispatch {这里面的内容}, 带了 type 和 callback 函数.所以下面我们可以拿到{type, callback},这里只要 callback
		// 5.上拉加载更多; payload(从 index.tsx 页面拿到)  select(拿到我之前存储的channels数组)
		*fetchChannels(/*这里第一个参数是 action */ { callback, payload },{ call, put, select },) {
			
			// 6.上拉加载更多; const {channels} = yield select((state: RootState) => state.home)
			// 13.上拉加载更多; 取 pagination 
			const {channels, pagination} = yield select((state: RootState) => state.home); 

			// 14.上拉加载更多; 刷新,页码要重置成 1, 加载更多时,页码+1
			let page = 1;
			if(payload && payload.loadMore) {
				page = pagination.current + 1; // pagination.current 从上面 state.home 里拿.
				// console.log('page:',page)
			}

			// 12.上拉加载更多; 传递页码参数,{params:{page:1}}
			const { data } = yield call(axios.get, CHANNEL_URL, {
				params:{
					page, // 15.上拉加载更多;
				}
			});

			// 7.上拉加载更多; (let if )payload loadMore 为 ture ,我们要加载拼接的数据. 
			let newChannels = data.result;
			if(payload && payload.loadMore) {
				newChannels = channels.concat(newChannels); // .concat旧数据 追加新数据.
			}


			yield put({
				type: 'setState',
				payload: {
					// 8.上拉加载更多;
					channels: newChannels,
					// channels: data.result, // 因为数据里面 data 还包了一个对象 result

					// 16.上拉加载更多; 转 Home -> index.tsx 
					pagination: {
						current: data.pagination.current,
						total: data.pagination.total,
						hasMore: newChannels.length < data.pagination.total, // 如果展示的新数据的长度 小于 总长度. 可以加载更多.
					}
				},
			});

			// console.log(newChannels.length,data.pagination.total, newChannels.length < data.pagination.total);
			// 10.下拉刷新; 如果是个函数 ,我们执行 callback 方法.
			if (typeof callback === 'function') {
				callback();
			}
		},

		// ⑥ 首页列表 ;
		// *fetchChannels(_,{call, put}) {
		// 	const {data} = yield call(axios.get, CHANNEL_URL);
		// 	yield put({
		// 		type: 'setState',
		// 		payload: {
		// 			channels: data.result, // 因为数据里面 data 还包了一个对象 result
		// 		}
		// 	})
		// }
	},
};

export default homeModel;
