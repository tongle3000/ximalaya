/**
 * 轮播图
 *
 * import { ICarousel } from '@/models/home';
 *
 * 读取的是 home 里的 YApi 里的 图片 动态 数据.
 *
 */
import { RootState } from '@/models';
import { ICarousel } from '@/models/home';
import { hp, viewportWidth, wp } from '@/utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SnapCarousel, { AdditionalParallaxProps, Pagination, ParallaxImage } from 'react-native-snap-carousel';
import { connect, ConnectedProps } from 'react-redux';


const mapStateToProps = ({ home }: RootState) => ({
	data: home.carousels,
	activeCarouselIndex: home.activeCarouselIndex,
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

// ⑩③ 加入动态数据 yapi; 定义一个接口 IProps, 下面的 data 可以不要了
// interface IProps {
// 	data: ICarousel[];
// }

// 轮播图的宽度:
const sliderWidth = viewportWidth;

const slideWidth = wp(92); // 图片宽度
export const slideHeight = hp(26); // 图片高度 ; // 2.设置滚动上去渐变背景色消失; 导出 供后面这个用. 

const itemWidth = wp(92) + wp(4) * 2; // 滚动的整个 item宽度= 图片宽度 + 2 边边距

class Carousel extends React.Component<IProps> {
	// ⑩④ 加入动态数据 yapi; IProps做为泛型,传进来.
	// ④步: 显示的圆点
	// state = {
	// 	activeSlide: 0,
	// };

	// activeCarouselIndex显示的圆点的状态,数据从 home.ts 里取. 不报错在这个组件内.

	// ③步: 显示的圆点
	onSnapToItem = (index: number) => {
		// 这个onSnapToItem 函数,有个参数, index
		// this.setState({
		// 	activeSlide: index,
		// });
		const { dispatch } = this.props;
		dispatch({
			type: 'home/setState',
			payload: {
				activeCarouselIndex: index,
			},
		});
	};

	// 小圆点状态(组件), 把它当成一个变量,一个属性来使用
	get pagaination() {
		// ⑥步: 显示的圆点 this state 获取某一个图片
		const { data, activeCarouselIndex } = this.props;
		// const { data } = this.props; // ⑩⑧ 加入动态数据 yapi; data 从 props 取.
		return (
			<View style={styles.paginationWrapper}>
				<Pagination
					activeDotIndex={activeCarouselIndex} // ①显示的圆点: 当前显示的哪张图的圆点.
					dotsLength={data.length} // 圆点个数
					inactiveDotScale={0.7} // 不是当前的显示圆点 大小的比例放大一点点
					inactiveDotOpacity={0.4} // 不是当前的显示圆点 透明度
					// styles
					containerStyle={styles.paginationContainer}
					dotContainerStyle={styles.dotContainer}
					dotStyle={styles.dot}
				/>
			</View>
		);
	}
  
	// 滚动图片 (组件)
	renderItem = (
		{ item }: { item: ICarousel }, // ⑩⑥ 加入动态数据 yapi;  item string 类型改为 ICarousel
		parallaxProps?: AdditionalParallaxProps /*视差效果 ParallaxImage */,
	) => {
		// return <Image source ={{uri: item}} style={styles.image} />; // Image 是从 react-native 导入的
		// 视差图片 ParallaxImage(上面改为下面这句)
		return (
			<ParallaxImage
				source={{ uri: item.image }} // ⑩⑦  加入动态数据 yapi;  item.image; // 如果传的是网络的图片,必须定义他的宽高.
				style={styles.image}
				containerStyle={styles.imageContainer}
				spinnerColor="rgba(0, 0, 0, .25)" // 图片加载中的颜色
				{...parallaxProps} /*视差图片 ParallaxImage */
				parallaxFactor={0.8} // 视差图片 速度默认 0.3,
				showSpinner // 视差图片 加载动画的效果
			/>
		);
	};

	render() {
		const { data } = this.props; // ⑩⑤ 加入动态数据 yapi; data 从 props 取.
		return (
			<>
				<SnapCarousel
					data={data} // 图片数据
					renderItem={this.renderItem} // 每一次渲染这个图片,它的组件
					sliderWidth={sliderWidth} // 应该是整个轮播的宽度
					itemWidth={itemWidth} // 每张图滚动的宽度
					// 视差图片 ParallaxImage
					hasParallaxImages={true} // ={true}可以省略不写, 只有 true APP 里才会显示图片. 视差图片 ParallaxImage
					onSnapToItem={this.onSnapToItem} // ② 监听当前显示的圆点, 提供给 Pagination 组件的 activeDotIndex={activeSlide} // ①显示的圆点: 当前显示的哪张图的圆点.
					loop // 循环拖动
					autoplay // 自动循环播放
				/>
				{/* // ⑦步: 显示所有圆点 的 组件 */}
				{this.pagaination}
			</>
		);
	}
}

const styles = StyleSheet.create({
	// 视差图片 ParallaxImage
	imageContainer: {
		width: slideWidth,
		height: slideHeight,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 8,
		marginTop: 10,
	},
	// 包圆点的块,跟图片一样大的区域
	paginationWrapper: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},
	// 圆点块的区域
	paginationContainer: {
		position: 'absolute',
		bottom: 10,
		backgroundColor: 'rgba(0,0,0, .35)',
		paddingHorizontal: 3, // 水平内边距
		paddingVertical: 4, // 垂直内边距
		borderRadius: 8, // 设置个圆角.
	},
	// 圆点样式
	dotContainer: {
		marginHorizontal: 6, // 外边距 margin 改为 6 ;
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: 'rgba(255,255,255, .92)',
	},
	image: {
		...StyleSheet.absoluteFillObject, // 绝对定位
		resizeMode: 'cover', // 伸缩模式
	},
});

export default connector(Carousel);
