import IconFont from '@/assets/iconfont';
import { RootStackNavigation, RootStackParamList } from '@/navigator';
import Account from '@/pages/Account';
import Found from '@/pages/Found';
import Listen from '@/pages/Listen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import React from 'react';

import HomeTabs from './HomeTabs';


// import { StackNavigationProp} from '@react-navigation/Stack';
export type BottomTabParamList = {
	HomeTabs: undefined;
	Listen: undefined;
	Found: undefined;
	Account: undefined;
};
 
const Tab = createBottomTabNavigator<BottomTabParamList>();

// 定义一个接口, 来接收 2 个属性: route navigation

// & 并且加上内部的.  state就是整个导航器内部的状态.  这里用的是 RootStackParamList , BottomTabs
type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
	state?: TabNavigationState;
};

interface IProps {
	navigation: RootStackNavigation;
	route: Route;
}

// 写个方法
// 如果没有的话,route.params.screen  || 'Home',  一般走不到这里来,找不到,就指定到 Home,
// 这时要把  RootStackParamList 中的 BottomTabs 的 属性值改成 {screen?: string;}

// function getHeaderTitle(route: Route) {
// 	const routeName = route.state
// 		? route.state.routes[route.state.index].name
// 		: route.params?.screen || 'HomeTabs'; // 直接screen 报错
// 	switch (routeName) {
// 		case 'HomeTabs':
// 			return '首页';
// 		case 'Listen':
// 			return '我听';
// 		case 'Found':
// 			return '发现';
// 		case 'Account':
// 			return '账户';
// 		default:
// 			return '首页';
// 	}
// }

// 1.修改首页顶部; 上面代码块改为:
function getHeaderTitle(routeName: string) {
	switch (routeName) {
		case 'HomeTabs':
			return '首页';
		case 'Listen':
			return '我听';
		case 'Found':
			return '发现';
		case 'Account':
			return '账户';
		default:
			return '首页';
	}
}


class BottomTabs extends React.Component<IProps> {

	// 3.修改首页顶部; 必须加 componentDidMount, 不加的话, APP 加载第一次时,顶部头还在.
	componentDidMount() {
		this.setOptions(); // 6.修改首页顶部;
	}

	componentDidUpdate() {
		this.setOptions(); // 6.修改首页顶部;
	}

	// 5.修改首页顶部; 控制头部显示 函数.
	setOptions = () => {
		// 4.修改首页顶部; 把这整块代码 放在一个方法里, 以便这 2 个生命周期函数componentDidMount,componentDidUpdate都调用.
		// componentDidUpdate: 只有 PROPS 发生变化,就会执行这个周期.
		const { navigation, route } = this.props;

		// 2.修改首页顶部; 加入下面路由
		const routeName = route.state
		? route.state.routes[route.state.index].name
		: route.params?.screen || 'HomeTabs'; 

		if(routeName === 'HomeTabs') {
			navigation.setOptions({
				headerTransparent: true, // 透明
				headerTitle: '', // 赋空值
			});
		} else {
			navigation.setOptions({
				headerTransparent: false, // 这个 false 必须加
				headerTitle: getHeaderTitle(routeName),
			});
		}
	}

	render() {
		return (
			// activeTintColor='#f86442'
			<Tab.Navigator
				// initialRouteName="HomeTabs"
				tabBarOptions={{
					inactiveTintColor: '#333', // 初始色
					activeTintColor: '#f86442',// 选中色
				}}
			>
				<Tab.Screen
					name="HomeTabs"
					component={HomeTabs}
					options={{
						tabBarLabel: '首页',
						tabBarIcon: ({ color, size }) => (
							<IconFont
								name="icon-daohangshouye"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Listen"
					component={Listen}
					options={{
						tabBarLabel: '我听',
						tabBarIcon: ({ color }) => (
							<IconFont name="icon-tingshu1" color={color} size={32} />
						),
					}}
				/>
				<Tab.Screen
					name="Found"
					component={Found}
					options={{
						tabBarLabel: '发现',
						tabBarIcon: ({ color }) => (
							<IconFont name="icon-faxian" color={color} size={26} />
						),
					}}
				/>
				<Tab.Screen
					name="Account"
					component={Account}
					
					options={{
						tabBarLabel: '我的',
						tabBarIcon: ({ color }) => (
							<IconFont name="icon-ziyuan" color={color}  size={24} />
						)
						
					}}
				/>
			</Tab.Navigator>
		);
	}
}
export default BottomTabs;
