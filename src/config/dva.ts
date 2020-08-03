import models from '@/models';
import { create } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';

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