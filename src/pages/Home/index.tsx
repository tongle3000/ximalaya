import { RootState } from '@/models';
import { IChannel } from '@/models/home';
import { RootStackNavigation } from '@/navigator';
import React from 'react';
import { Button, FlatList, ListRenderItemInfo, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import Carousel from './Carousel';
import ChannelItem from './ChannelItem';
import Guess from './Guess';

// dva ; 正在加载..:loading,loading.effects['home/asyncAdd'];
const mapStateToProps = ({ home, loading }: RootState) => ({
	//state 改成 对象结构的方法 {home}
	carousels: home.carousels, // ⑩① 加入动态数据 yapi;
	loading: loading.effects['home/fetchChannels'], // 跟异步操作的 type 值是一样的
	channels: home.channels, // 7 首页列表
	hasMore: home.pagination.hasMore, // 17.上拉加载更多; 引入,下面加载的异步操作,要判断是否能加载跟多.

});

// connect 帮我们把 models 里定义的 state 映射到 这个页面来.
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
	navigation: RootStackNavigation;
}

// 3.下拉刷新;  声明个接口,下面 Home 组件引入.
interface IState {
	refreshing:boolean;
}

// type IProps = {
//     navigation: RootStackNavigation;
// };

class Home extends React.Component<IProps, IState> { // 4.下拉刷新; 

	// 5.下拉刷新; 先在 state 里给 refreshing 定义个默认值
	state = {
		refreshing: false,
	}

	// ⑩ 加入动态数据 yapi;
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch({
			type: 'home/fetchCarousels', // fetchCarousels 是 models -> home.ts 里定义的 action
		});
		// 8 首页列表
		dispatch({
			type: 'home/fetchChannels',
		});
	}
    // 6.加链接;  onPress方法要改.
    onPress = (data: IChannel) => {
        console.log(data);
        // console.log(data); 打印: {"id": "dd4cE8Fd-cA2B-CC70-88fA-B8Acf6f51272", "image": "http://39.105.213.120/thumbnail/19.jpg", "played": 597, "playing": 178, "remark": "ullamco", "title": "起明目或写适"}
    }
	// onPress = () => {
	// 	const { navigation } = this.props;
	// 	navigation.navigate('Detail', {
	// 		id: 200,
	// 	});
    // };
    
    // FlatList 优化 keyExtractor , 帮助组件生成 不重复的 KEY, key 的作用 检查生成的 Item 变化的位置.精准检查,减少重新渲染的开销.
    keyExtractor = (item: IChannel) => {
         return item.id;
    }


	renderItem = ({ item }: ListRenderItemInfo<IChannel>) => {
        // 5.加链接; 添加 onPress={this.onPress}, 上面一个函数就是 onPress 方法, 连接到详情页的.
        return <ChannelItem data={item} onPress={this.onPress} />;
        /**
         * return <ChannelItem data={item} onPress={() => {this.onPress(item)}} />;
         * 上面这句的 功能跟前面的功能一样,也能打出 data, 不同点就是, 这个组件每循环一次, onPress 也会生产一个新的函数. 
         * 会增加内存负担, 而且 ChannelItem 组件每次接受的 onPress 函数都不一样.
         * 
         * PureComponent
         * 父组件每次渲染, 子组件会必须跟着渲染, 如果子组件逻辑独立,可以不渲染的. 可以调用 React.PureComponent
         */
	};

	/**
	 * 下面注释的 render 块 改成下面的.
	 * ListHeaderComponent={} 能接收函数,也能 class, 还可以是 组件
	 */

	// 这个 header 我们下面调用它的时候, 是真正调用的是 header 函数
	// 在 header中返回一个 View, 里面直接插入 2 个组件,轮播图,和 猜你喜欢.
	get header() {
		const { carousels } = this.props;
		return (
			<View>
				{/* // ⑩② 加入动态数据 yapi; 把数据传入下面这个组件里, 再到 Carousel.tsx 里定义一个接口, IProps */}
				<Carousel data={carousels} />
				<Guess />
			</View>
		);
	}

	// 2.下拉刷新; 这里要控制逻辑状态, 不然一直出现菊花图标在加载. 上面 3 声明个接口.
	onRefresh = () => {
		// 6.下拉刷新; (1)修改刷新状态为 true
		this.setState({
			refreshing: true,
		});
		// 6.下拉刷新; (2)获取数据. 在componentDidMount 里的代码, 只刷新列表 channels
		const { dispatch } = this.props;
		dispatch({
			type: 'home/fetchChannels',
			// 9 下拉刷新; 传递个回调函数 callback. 但是这个 dispatch 改了,就要到 home.ts 里改定义的带 callback
			callback: () => {
				// 6.下拉刷新; (3)修改刷新状态为 false. 这个 false 状态不能在 aciton 一发起就改变状态,应该等 action 执行完, 数据加载好,再改状态.
				this.setState({
					refreshing: false,
				});
			}
		});

		// // 6.下拉刷新; (3)修改刷新状态为 false. 这个 false 状态不能在 aciton 一发起就改变状态,应该等 action 执行完再改状态.
		// this.setState({
		// 	refreshing: false,
		// });
		
	}

	// 2.上拉加载更多. 
	onEndReached = () => {
		// console.log('加载更多...');
		// 3.上拉加载更多; 调用 Action 内容换了就是,没有追加功能. 转 home.ts 修改,
		// 17.上拉加载更多; 判断能否加载更多;
		const { dispatch, loading, hasMore } = this.props;
		if(loading || !hasMore) {
			return;
		}

		dispatch({
			type: 'home/fetchChannels',
			// 4.上拉加载更多;  我们要传个参数, 判断是刷新, 还是加载跟多. loadMore: true,
			payload: {
				loadMore: true,
			}
		});
	}

	// 18.上拉加载更多; 加提示; 能给出提示"正在加载..."; 不能给出提示"我是有底线的";
	get footer() {
		const {hasMore, loading, channels} = this.props;
		if(!hasMore) {
			return <View style={styles.load}><Text style={styles.loadText}>---我是有底线的---</Text></View>;
		}
		if(loading && hasMore && channels.length > 0) {
			// console.log(channels.length, hasMore)
			return <View style={styles.load}><Text style={styles.loadText}>正在加载中...</Text></View>;
		}
	}

	// 2.channels 没有数据的时候, 空数组 空数据
	get empty() {
		// 判断: 因为第一次,data 就是个空数组
		const {loading} = this.props;
		if(loading) return; // 如果在加载中的话,直接 return 出去,不执行下面的.
		return (
			<View style={styles.empty}>
				<Text style={styles.loadText}>暂无数据</Text>
			</View>
		)
	}


	render() {
		const { channels } = this.props; // 从 dva home 里取 num
		// 7.下拉刷新;
		const {refreshing} = this.state;
		return (
			// 9 首页列表
			<FlatList
				ListHeaderComponent={this.header}
				data={channels} //  3.channels 没有数据的时候, 空数组 空数据; 改成空数组测试下.data={[]]} 
                renderItem={this.renderItem}
				keyExtractor={ this.keyExtractor}
				
				// 1.下拉刷新
				onRefresh={ this.onRefresh } // onRefresh 不能单独使用, 要refreshing={true}
				refreshing={refreshing} // 8.下拉刷新; 值true 改为 refreshing ,{true}=>{refreshing}, 测试 能刷新. 如果看不到效果,可以到 yapi 列表 高级MOCK 脚本 开 mock 脚本输入: delay=3000 就是延迟 3 秒.拖到那个组件等待着看.

				// 1.上拉加载更多.
				onEndReached={this.onEndReached}
				onEndReachedThreshold={0.2} // 比例

				// 17.上拉加载更多; 加提示;
				ListFooterComponent={this.footer}

				// 1.channels 没有数据的时候, 空数组 空数据
				ListEmptyComponent={this.empty}
			/>
		);
	}

	// render() {
	//     const {carousels, channels} = this.props;   // 从 dva home 里取 num
	//     return (
	//         <ScrollView>
	//             {/* // ⑩② 加入动态数据 yapi; 把数据传入下面这个组件里, 再到 Carousel.tsx 里定义一个接口, IProps */}
	//             <Carousel data = { carousels } />
	//             <Guess  />
	//             {/* // 9 首页列表 */}
	//             <FlatList  data={channels} renderItem={this.renderItem} />
	//             <Button title="跳转到详情页2" onPress={this.onPress} />

	//         </ScrollView>
	//     );
	// }
}

const styles = StyleSheet.create({
	load: {
		alignItems:'center',
		paddingVertical: 10,
	},
	loadText: {
		color: '#999',
	},
	empty: {
		alignItems: 'center',
		paddingVertical: 100,
	},
});

export default connector(Home);
