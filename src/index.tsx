import '@/config/http';

import store from '@/config/dva';
import Navigator from '@/navigator';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';


export default class extends React.Component {
	// 这里是省略 calss 名字写法,也是可以的.
	render() {
		return (
			// Provider 这个的作业, 让它里面包裹的组件,都能得到 store = {store} 的值
			<Provider store={store}>
				<Navigator />
				<StatusBar
					backgroundColor="transparent" // 背景色透明
					barStyle="dark-content" // 深色
					translucent // 半透明 
				/> 
			</Provider>
		);
	}
}


