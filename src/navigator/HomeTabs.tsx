import Home from '@/pages/Home';
import indexNum from '@/pages/Home/indexNum';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.PureComponent {

	// 8.修改首页顶部; 这个可以返回一个组件. 他能接收 props:MaterialTopTabBarProps, 还能接收 MaterialTopTabBar 组件
	renderTabBar = (props: MaterialTopTabBarProps) => {
		// 9.修改首页顶部;  pages -> views -> TopTabBarWrapper.tsx 自定义组件,下面直接引入这个组件. 传入{...props}
		return <TopTabBarWrapper {...props} />
	}

	render() {
		return (
			<Tab.Navigator
				lazy // 异步加载除第一个页面外的其他页面.  lazy={true}  可以省略成 lazy
				tabBar={this.renderTabBar} // 7.修改首页顶部; 这个可以返回一个组件.
				sceneContainerStyle={styles.sceneContainer} // 为了taby实现渐变色, 这里设置透明.
				tabBarOptions={{
					scrollEnabled: true, // 超过是否允许滚动
					tabStyle: {
						width: 60, // TAB宽度
						
					},
					indicatorStyle:{ // 这个是下面滚动线条的样式.
						height: 4,
						width: 20,
						marginLeft: 30,
						borderRadius:2,
						backgroundColor: '#f86442'
					},
					activeTintColor:'#f86442',
					inactiveTintColor:'#333',
					
					
				}}
			>
				<Tab.Screen name="Home" component={Home} options={{ tabBarLabel:'推荐',}}  />
				<Tab.Screen name="Vip" component={indexNum} />
				<Tab.Screen name="小说" component={indexNum} />
				<Tab.Screen name="直播" component={indexNum} />
				<Tab.Screen name="儿童" component={indexNum} />
				<Tab.Screen name="播客" component={indexNum} />
				<Tab.Screen name="杭州" component={indexNum} />
			</Tab.Navigator>
		);
	}
}
const styles= StyleSheet.create({
	sceneContainer: {
		backgroundColor: 'transparent'
	}
});

export default HomeTabs;
