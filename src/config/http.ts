import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL; // 配置 IP 端口

// 添加 请求拦截器
axios.interceptors.request.use(
	function (config) {
		// console.log('---请求 config---', config);
		// console.log('----URL----', Config.API_URL);
		return config;
	},
	function (error) {
		// use 的第二个参数, 错误的回调函数.
		return Promise.reject(error);
	},
);

// 添加 响应拦截器
axios.interceptors.response.use(
	function (response) {
		// console.log('-响应数据 response-', response);
		return response.data;
	},
	error => {
		// console.log('---------error', error);
  		return Promise.reject(error)
	},
);
