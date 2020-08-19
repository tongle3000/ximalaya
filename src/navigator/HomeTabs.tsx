import IconFont from '@/assets/iconfont';
import { createHomeModel } from '@/config/dva';
import { RootState } from '@/models';
import { ICategory } from '@/models/category';
import Home from '@/pages/Home';
import indexNum from '@/pages/Home/indexNum';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

// 1.10-10 根据我的分类,动态生成标签导航器 和 model; 创建HomeParamList, 传给Tab组件;
export type HomeParamList = {
	// home: undefined;
	[key: string]: {
		namespace:string;
	}
};
const Tab = createMaterialTopTabNavigator<HomeParamList>();

const mapStateToProps = ({ category }: RootState) => {
	return {
		myCategorys: category.myCategorys,
	};
};
const connector = connect(mapStateToProps);

type ModeState = ConnectedProps<typeof connector>;

interface IProps extends ModeState {}
// end 1.10-10 根据我的分类,动态生成标签导航器 和 model; 创建HomeParamList, 传给Tab组件;

class HomeTabs extends React.PureComponent<IProps> {
	// 2.10-10 根据我的分类,动态生成标签导航器 和 model; IProps

	// 8.修改首页顶部; 这个可以返回一个组件. 他能接收 props:MaterialTopTabBarProps, 还能接收 MaterialTopTabBar 组件
	renderTabBar = (props: MaterialTopTabBarProps) => {
		// 9.修改首页顶部;  pages -> views -> TopTabBarWrapper.tsx 自定义组件,下面直接引入这个组件. 传入{...props}
		return <TopTabBarWrapper {...props} />;
	};

	// 6.10-10 根据我的分类,动态生成标签导航器 和 model; renderScreen 函数;
	renderScreen = (item: ICategory) => {

		// 8.10-10 根据我的分类,动态生成标签导航器 和 model;  引入 createHomeModel() 函数;
		createHomeModel(item.id);

		return (
			<Tab.Screen
				key={item.id}
				name={item.id}
				component={item.name==="畅销书" ? indexNum : Home} // 所有调用的是 Home 组件, 解决这个问题,,到 home.ts 配置动态的 key;
				options={{ tabBarLabel: item.name }}
				initialParams={{  // 9.10-10 根据我的分类,动态生成标签导航器 和 model; namespace,报类型错误 HomeParamList,把 undefined 改成 {nemespace:string}
					namespace: item.id
				}}
			/>
		);
	};

	render() {
		// 4.10-10 根据我的分类,动态生成标签导航器 和 model; myCategorys
		const { myCategorys } = this.props;

		return (
			<Tab.Navigator
				initialRouteName="Home"
				lazy // 异步加载除第一个页面外的其他页面.  lazy={true}  可以省略成 lazy
				tabBar={this.renderTabBar} // 7.修改首页顶部; 这个可以返回一个组件.
				sceneContainerStyle={styles.sceneContainer} // 为了taby实现渐变色, 这里设置透明.
				tabBarOptions={{
					scrollEnabled: true, // 超过是否允许滚动
					tabStyle: {
						width:'auto', // TAB宽度
						paddingHorizontal: 5,
					},
					style: { backgroundColor: 'powderblue' },
					indicatorStyle: {
						// 这个是下面滚动线条的样式.
						height: 3,
						width:20,
						marginLeft: 16,
						// height: Dimens.dx_8,
                        // width: Dimens.dx_200,
                        // marginLeft: (screenWidth / 2.0 - Dimens.dx_200) / 2.0,
						borderRadius: 2,
						backgroundColor: '#f86442',
					},
					activeTintColor: '#f86442',
					inactiveTintColor: '#333',
					labelStyle: { fontSize: 16 },
					// showIcon: true,
					// iconStyle:{}
				}}
			>
				{/* // 5.10-10 根据我的分类,动态生成标签导航器 和 model; 动态生成 Tab 组件; */}
				{myCategorys.map(this.renderScreen)}
				{/* 
					<Tab.Screen name="Home" component={Home} options={{ tabBarLabel:'推荐',}}  />
					<Tab.Screen name="Vip" component={indexNum} />
					<Tab.Screen name="小说" component={indexNum} />
					<Tab.Screen name="直播" component={indexNum} />
					<Tab.Screen name="儿童" component={indexNum} />
					<Tab.Screen name="播客" component={indexNum} />
					<Tab.Screen name="杭州" component={indexNum} />
					<Tab.Screen name="相声" component={indexNum} /> 
				*/}
			</Tab.Navigator>
		);
	}
}
const styles = StyleSheet.create({
	sceneContainer: {
		backgroundColor: 'transparent',
	},
});

export default connector(HomeTabs); // 3.10-10 根据我的分类,动态生成标签导航器 和 model; connector;
