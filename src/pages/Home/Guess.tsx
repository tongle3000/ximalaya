/**
 * import { IGuess } from '@/models/home';
 *
 * 读取的是 models/home  YApi 里的动态数据 type: 'home/fetchGuess'
 */
import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { IGuess } from '@/models/home';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';


const mapStateToProps = ({ home }: RootState) => {
	return {
		guess: home.guess,
	};
};
const connector = connect(mapStateToProps);



// 要发起个 action, 这个组件加载完后执行 ③ ; 这句是获取 dispatch
type ModelState = ConnectedProps<typeof connector>;

class Guess extends React.PureComponent<ModelState> {
	// ModelState 是获取 dispatch
	// 要发起个 action, 这个组件加载完后执行 ①
	componentDidMount() {
		this.fetch();
	}
	// 要发起个 action, 这个组件加载完后执行 ②
	fetch = () => {
		const { dispatch } = this.props; //
		dispatch({
			// dispatch 作业,发起一个 action
			type: 'home/fetchGuess', // 对象 action
		});
	};


	keyExtractor = (item:IGuess) => {
		return item.id;
	}

	// isTransition
	// isTransitionAction=() => {
	// 	const {dispatch} =this.props;
	// 	dispatch({
	// 		type: 'home/setState',
	// 		payload: {
	// 			isTransition: true,
	// 		}
	// 	})
	// }

	// 返回的是个组件, 这里使用 View, 图片必须制定宽高.
	// }
	renderItem = ({ item }: { item: IGuess }) => {
		return (
			// <TouchableOpacity style ={styles.item} onPress={() => {alert('dian')}}>
			//     <Image source = {{uri: item.image}} style={ styles.image} />
			// 	<Text numberOfLines={2}>{item.title}</Text>
			//     {/* numberOfLines={2} 最多显示 2 行. */}
			// </TouchableOpacity>
			<Touchable style={styles.item} onPress={()=>console.log(item)}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<Text numberOfLines={2}>{item.title}</Text>
				{/* numberOfLines={2} 最多显示 2 行. */}
			</Touchable>
		);
	};

	render() {
		const { guess } = this.props;
		return (
			<View style={styles.guessContainer}>
				<View style={styles.hd}>
					<View style={styles.hdLeft}>
						<IconFont name="icon-user" color={'#000'} size={14} />
						<Text style={styles.hdTitle}>猜你喜欢</Text>
					</View>
					<View style={styles.hdRight}>
						<Text style={styles.more}>更多</Text>
						<IconFont name="icon-more" color={'#666'} size={16} />
					</View>
				</View>

				{/* <Text>{JSON.stringify(guess)}</Text> JSON.stringify(guess) 打印出了 json 代码  */}
				{/* FlatList 展示数据, 先上面从 react-native 引入这个组件 */}
				<FlatList
					style={styles.list}
					data={guess}
					renderItem={this.renderItem}
					numColumns={3} // 3 列
					keyExtractor={this.keyExtractor}
				/>
				<Touchable style={styles.changeGuess} onPress={this.fetch}>
					
					<IconFont
						color={'red'}
						name="icon-shuaxin2"
						size={14}
					/>
					<Text style={styles.hyp}>换一批</Text>
				</Touchable>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	guessContainer: {
		backgroundColor: '#fff',
		borderRadius: 8,
		margin:6,
        marginLeft:16,
        marginRight:16,
		padding: 9,
	},
	item: {
		flex: 1,
		alignItems: 'center',
		marginVertical: 0, // 外 竖向: 元素 与 元素之间的 边距 8
		marginHorizontal: 6, // 外 横向: 元素 与 元素之间的 边距 5
		marginBottom: 12,
	},
	image: {
		width: '100%',
		height: 100,
		borderRadius: 6,
		marginBottom: 7,
	},
	hd: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		padding: 10,
		// borderBottomWidth: StyleSheet.hairlineWidth, // 根据分辨率 调整边的粗细. 官方 APP 没有线
		borderBottomColor: '#efefef',
	},
	hdLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	hdRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	hdTitle: {
		alignItems: 'center',
		color: '#333',
		marginLeft: 5,
	},
	list: {},
	more: {
		color: '#666',
		marginRight: 0,
	},
	changeGuess: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
	},
	hyp: {
		color: '#666',
		marginLeft: 7,
	},

});
export default connector(Guess);
