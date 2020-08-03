import { Dimensions } from 'react-native';

/**
 * @param Dimensions 
 * width   height
 * 它会返回手机屏幕的 width 宽度, height 高度.
 * 重命名: viewportWidth, viewportHeight
 */
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window',
);


/**
 * 百分比
 * 根据百分比获取 宽度、高度 的函数
 * @param percentage 
 * 
 * wp . hp
 */
function wp(percentage: number) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value); // 四舍五入;
}

function hp(percentage: number) {
	const value = (percentage * viewportHeight) / 100;
	return Math.round(value); // 四舍五入;
}

// 再导出去, 
export { viewportWidth, viewportHeight, wp, hp };
