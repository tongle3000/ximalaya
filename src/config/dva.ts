import models from '@/models';
import homeModel from '@/models/home';
import { create, Model } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import modelExtend from 'dva-model-extend';

// impor t modelExtend from 'dva-model-extend'; // 波浪线,这个第三方库,没有 ts文件.得自己在根目录下 新建index.d.ts 文件.
/**
    //  10-10 根据我的分类,动态生成标签导航器 和 model; dva.ts 里引入 modelExtend 是报波浪线错误,所以声明下面这个文件.
    declare module 'dva-model-extend' {
        impor { Model } from 'dva-core-ts';
        export default function modelExtend(...model: Model[]): Model;
    }
 */



// 1.创建实例
const app = create();

// 2.加载 model 对象
models.forEach(model => {
    app.model(model); // 通过 app.model 方法,把取到的 model 放进去.这样就把这个 model 加载进来了
})

// use 方法必须在 start() 方法之前使用.
app.use(createLoading()); 
// 3.启动 dva
app.start();

// 4.导出 dva 的数据
const store = app._store; // 获取 redux 的 store 对象供 react-redux 使用.

export default store;



// 7.10-10 根据我的分类,动态生成标签导航器 和 model;  动态生成 model;  modelExtend 接收很多 model
// createHomeModel 可能会重复多次的加载; 需要处理下,定义一个接口
// 解决 createHomeModel 会重复加载多次的问题;
interface Cached {
    [key: string]: boolean;
}
const cached: Cached = {
    home: true, // 定义 home true 表示已经加载过
}

function registerModel(model: Model) {
    if(!cached[model.namespace]) { // 如果! 没有找到,我们才会加载.
        app.model(model);
        cached[model.namespace]= true;
    }
}
export function createHomeModel(namespace: string) {
    // modelExtend();
    const model = modelExtend(homeModel, {namespace});
    // app.model(model);// 动态插入到 dva里
    registerModel(model);
}