import { DvaLoadingState } from 'dva-loading-ts';

import album from './album';
import category from './category';
import home from './home';
import homeNum from './homeNum';

/**
 * YApi 动态数据
 * import home from './home';
 */

/**
* 本地写死 数据图片 加法运算
* import homeNum from './homeNum';
*/

/**
 * 导出所有的 model 文件
 * 定义 model 类型
 */

const models =[home, homeNum, category, album];

// 导出每个 model 的 类型
export type RootState = {
    home: typeof home.state;
    homeNum: typeof homeNum.state;
    category: typeof category.state;
    album: typeof album.state;
    loading: DvaLoadingState;
} & {
    [key: string]: typeof home.state;
}
export default models;