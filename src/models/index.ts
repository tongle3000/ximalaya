import { DvaLoadingState } from 'dva-loading-ts';

import home from './home';

/**
 * 导出所有的 model 文件
 * 定义 model 类型
 */

const models =[home];

// 导出每个 model 的 类型
export type RootState = {
    home: typeof home.state;
    loading: DvaLoadingState;
}

export default models;