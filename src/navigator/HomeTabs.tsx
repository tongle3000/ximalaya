import Home from '@/pages/Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator
			lazy // 异步加载除第一个页面外的其他页面.  lazy={true}  可以省略成 lazy
			tabBarOptions={{
				scrollEnabled: true, // 超过是否允许滚动
				tabStyle: {
					width: 80, // TAB宽度
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
			<Tab.Screen name="Home" component={Home} options={{ tabBarLabel:'推荐'}} />
			<Tab.Screen name="Home2" component={Home} />
			<Tab.Screen name="Home3" component={Home} />
		</Tab.Navigator>
	);
}

export default HomeTabs;
