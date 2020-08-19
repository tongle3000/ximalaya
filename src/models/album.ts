/**
 * 频道album model
 */
import axios from 'axios';
import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';

const ALBUM_URL = '/mock/11/bear/album/list';

// 作者
interface IAuthor {
	name: string;
	avatar: string;
}

// list 节目
interface IProgram {
	id: string;
	title: string;
	playVolume: number;
	duration: string;
	date: string;
}

// 频道接口, 导出
export interface IAlbumModelState {
	id: string;
	title: string;
	summary: string;
	thumbnaiUrl: string;
	author: IAuthor;
	introduction: string;
	list: IProgram[];
}

// 频道 model 接口, 导出 
export interface AlbumModel extends Model {
	namespace: 'album';
	state: IAlbumModelState;
	reducers: {
		setState: Reducer<IAlbumModelState>;
	};
	effects: {
		fetchAlbum: Effect;
	};
}

// 定义个 初始数据
const initialState: IAlbumModelState = {
    id: '',
    title: '',
    thumbnaiUrl: '',
    summary: '',
    author: {
        name: '',
        avatar:''
    },
    introduction: '',
	list: [],
}


const albumModel: AlbumModel = {
    namespace: 'album',
    state: initialState,
    reducers: {
        setState(state=initialState, {payload}) { //state=initialState 防止 undefined;
            return {
                ...state,
                ...payload,
            }
        }
    },
    effects: {
        *fetchAlbum({payload},{call,put}) {
            const {data} = yield call(axios.get, ALBUM_URL); // call 调用 axios.get 函数, 传递 ALBUM_URL;
            yield put({
                type: 'setState', // put 调用这个 aciton;  
                // payload: {
                //     album: data,
                // }
                // 这里不用上面这么写,如果是这个 model 里有很多 不同的 data ,需要去传固定的 data
                payload: data, // 直接传给 state;
            });
        }
    }
}

export default albumModel;


// export interface Model {
//     namespace: string;
//     state?: any;
//     reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
//     effects?: EffectsMapObject;
//     subscriptions?: SubscriptionsMapObject;
//   }
