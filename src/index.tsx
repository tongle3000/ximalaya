import '@/config/http';

import store from '@/config/dva';
import Navigator from '@/navigator';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';




export default class extends React.Component {
	
	// 这里是省略 calss 名字写法,也是可以的.
	render() {

		// let barStyle: any = "HomeTabs" ? "dark-content" : "light-content";

		return (
			// Provider 这个的作业, 让它里面包裹的组件,都能得到 store = {store} 的值
			<Provider store={store}>
				<Navigator />
				<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
			</Provider>
		);
	}
}


