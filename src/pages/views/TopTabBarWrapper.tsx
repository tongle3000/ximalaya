import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { getActiveRouteName } from '@/utils';
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import { connect, ConnectedProps } from 'react-redux';

// import BVLinearGraient from 'react-native';
// 这个是计算 手机顶部状态栏(信号,刘海那个高度.) 高度的  {getStatusBarHeight} from 'react-native-iphone-x-helper';
// 得到这个高度,我们就可以直接 paddingTop 这个高度

const mapStateToProps = (state: RootState, props: MaterialTopTabBarProps) => {
	// console.log(home.activeCarouselIndex, home.carousels[home.activeCarouselIndex]);
	// 打印: 1 {"colors": ["#f2c579", "#a179f2"], "id": "220000201408196775", "image": "http://39.105.213.120/images/20.jpg"}
	// carousels可能被清空, 而 index 还在, 所以会出现错误.

	// 11.10-10 根据我的分类,动态生成标签导航器 和 model;  读取路由状态, 上面 "props: MaterialTopTabBarProps" 新加的;{ home }也改成 state,要拿到所有的仓库;
	// getActiveRouteName() 定义在 utils 里
	const routeName = getActiveRouteName(props.state); // 这个 routeName 是和 homespace 保持一致的. HomeTabs 里 name={item.id} ; namespace: item.id;
	const modelState = state[routeName];
	return {
		// 里面的 home 都改成了 modelState;
		linearColors: modelState.carousels
			? modelState.carousels[modelState.activeCarouselIndex] // carousels可能被清空, 而 index 还在, 所以会出现错误.
				? modelState.carousels[modelState.activeCarouselIndex].colors
				: undefined
			: undefined,
		gradientVisible: modelState.gradientVisible,
	};
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

// interface IProps extends MaterialTopTabBarProps {}
// 不能用 interface 接口,他不能继承多个, 所以要改成 type 联合类型
type IProps = MaterialTopTabBarProps & ModelState;

class TopTabBarWrapper extends React.Component<IProps> {
	// 链接 分类
	goCategory = () => {
		const { navigation } = this.props;
		navigation.navigate('Category');
	};

	get linearGradient() {
		// 7.设置滚动上去渐变背景色消失; gradientVisible
		const { gradientVisible, linearColors = ['#999', '#ccc'] } = this.props; // colors 可能是 undefined ,所以给它顶一个默认值.
		if (gradientVisible) {
			// true 显示渐变色组件.
			return (
				// <LinearGradient colors={linearColors} style={styles.linearGradient} />
				<LinearAnimatedGradientTransition
					colors={linearColors}
					style={styles.linearGradient}
				/>
			);
		}
		return null;
		// console.log(linearColors);
	}

	render() {
		// const { props } = this;
		// 1.顶部字颜色控制: 背景色显示,字白色; 滚动上去背景隐藏,字黑色;
		// 下面return 里的  style={textStyle} 都是.
		let { gradientVisible, indicatorStyle, ...restProps } = this.props;
		let textStyle = styles.text;
		let topColor = '#333';
		let searchBtn: any = styles.searchBtn;

		if (gradientVisible) {
			textStyle = styles.whiteText;
			topColor = '#fff';
			indicatorStyle = StyleSheet.compose(
				indicatorStyle,
				styles.whiteBackground,
			);
			searchBtn = StyleSheet.compose(searchBtn, styles.searchWhiteBg);
		}

		return (
			<View style={styles.container}>
				{this.linearGradient}
				{/* 渐变色: HomeTabs.tsx -> Tab.Navigator设置 sceneContainerStyle={styles.sceneContainer} // 为了taby实现渐变色, 这里设置透明. */}
				{/* 改到上面 get LinearGradient() <LinearGradient colors={['#999', '#eee']} style={styles.linearGradient}></LinearGradient> */}
				<View style={styles.topTabBarView}>
					{/* 3.顶部字颜色控制:activeTintColor={topColor}要放到{...restProps} 后面, 上面给它顶一个默认值.inactiveTintColor不是当前的 tab色  */}
					<MaterialTopTabBar
						{...restProps}
						indicatorStyle={indicatorStyle}
						activeTintColor={topColor}
						inactiveTintColor={topColor}
						style={styles.topBar}
					/>
					<Touchable
						style={styles.categoryBtn}
						onPress={this.goCategory}
					>
						<Text style={textStyle}>分类</Text>
					</Touchable>
				</View>
				<View style={styles.bottomView}>
					<Touchable style={searchBtn}>
						<Text style={styles.searchText}>搜索按钮</Text>
					</Touchable>
					<Touchable style={styles.historyBtn}>
						<IconFont
							name="icon-shijian"
							color={topColor} // 2.顶部字颜色控制: 背景色显示,字白色; 滚动上去背景隐藏,字黑色;
							size={22}
						/>
					</Touchable>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		paddingTop: getStatusBarHeight(), // 系统的 状态栏高度.
	},
	linearGradient: {
		...StyleSheet.absoluteFillObject, // position: 'absolute'; left top bottom right都是0, 就是撑满整个屏幕.
		height: 260,
	},
	topBar: {
		elevation: 0, // android 顶部状态栏 底部的阴影去掉;
		flex: 1, // 占剩余空间
		backgroundColor: 'transparent',
		overflow: 'scroll',
	},
	topTabBarView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	categoryBtn: {
		paddingHorizontal: 16,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderLeftColor: '#ccc',
	},
	bottomView: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		alignItems: 'center',
		paddingVertical: 5,
	},
	searchBtn: {
		flex: 1,
		paddingLeft: 16,
		height: 34,
		justifyContent: 'center',
		borderRadius: 15,
		backgroundColor: 'rgba(0,0,0, .1)',
	},
	searchText: { color: '#666' },
	historyBtn: {
		flexDirection: 'row',
		marginLeft: 12,
	},
	text: {
		color: '#333',
	},
	whiteText: {
		color: '#fff',
	},
	whiteBackground: {
		backgroundColor: '#fff',
	},
	searchWhiteBg: { backgroundColor: 'rgba(255,255,255, .8)' },
});

export default connector(TopTabBarWrapper);
