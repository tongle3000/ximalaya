//  10-10 根据我的分类,动态生成标签导航器 和 model; dva.ts 里引入 modelExtend 是报波浪线错误,所以声明下面这个文件.
declare module 'dva-model-extend' {
	import { Model } from 'dva-core-ts';
	export default function modelExtend(...model: Model[]): Model;
}
