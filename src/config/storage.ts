import AsyncStorage from '@react-native-community/async-storage';
import Storage, { LoadParams } from 'react-native-storage';

// 声明个 storage, 配置属性:
const storage = new Storage({
    size: 1000, // 最大容量
    storageBackend: AsyncStorage, // 数据引擎; 浏览器端传入: window.localstorage;  不设置这个,Storage就会将 数据保存在内存中, 一旦退出了,就没了.
	defaultExpires:  1000*3600*24*7, // 过期时间: 7 天 ; null 永远不过期;
	enableCache:  true, // 设置缓存
	sync:{}, // 当我们从 storage 里获取数据时,没有数据,或者已经过期,就会调用这里.先置空.
});

// 从新定义 load ,为了 dva使用storage,用 load时,不会报错.
const load = (params: LoadParams) => {
    return storage.load(params); 
}

export {load};

export default storage;

// load<T = any>(params: LoadParams): Promise<T>;
