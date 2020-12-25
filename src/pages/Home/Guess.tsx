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
import { Animated, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Easing, interpolate } from 'react-native-reanimated';
import { connect, ConnectedProps } from 'react-redux';



const mapStateToProps = ({ home }: RootState) => {
	return {
		guess: home.guess,
	};
};
const connector = connect(mapStateToProps);



// 要发起个 action, 这个组件加载完后执行 ③ ; 这句是获取 dispatch
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
	namespace: string;
	goAlbum: (item: IGuess ) => void;
}
class Guess extends React.PureComponent<IProps> {
	n = 0;
	state = {
		fadeAnim: new Animated.Value(0)
	};

	// ModelState 是获取 dispatch
	// 要发起个 action, 这个组件加载完后执行 ①
	componentDidMount() {
		this.fetch();
	}
	// 要发起个 action, 这个组件加载完后执行 ②
	fetch = () => {
		const { dispatch, namespace } = this.props; //
		console.log(namespace);
		dispatch({
			// dispatch 作业,发起一个 action
			type: namespace + '/fetchGuess', // 对象 action
		});
		this.n += 1; //6.28
		Animated.timing(this.state.fadeAnim, {
			toValue:this.n,
			duration: 700,
			useNativeDriver: true,
			// easing: Easing.inOut(Easing.ease)
		  }).start();
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
		const {goAlbum} = this.props;
		return (
			// <TouchableOpacity style ={styles.item} onPress={() => {alert('dian')}}>
			//     <Image source = {{uri: item.image}} style={ styles.image} />
			// 	<Text numberOfLines={2}>{item.title}</Text>
			//     {/* numberOfLines={2} 最多显示 2 行. */}
			// </TouchableOpacity>
			<Touchable style={styles.item} onPress={() => goAlbum(item)}>
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
					<Animated.View
						style={[
							styles.hypIcon,
							// styles.fadingContainer,
							{
								transform: [{
									// Y 轴 平移
									// translateY: this.state.fadeAnim
									// 	.interpolate({
									// 		inputRange: [0, 1],
									// 		outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0	
									// 	}),
									
									rotate: this.state.fadeAnim
									.interpolate({
										inputRange: [0, 1],
										outputRange: ['0deg', '360deg']
									}),
								}],
							}
						]}
					>
						<IconFont
							color={'red'}
							name="icon-shuaxin2"
							size={14}
						/>
					</Animated.View>
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
		marginTop: 12,
		marginBottom:6,
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
		justifyContent: 'center', // 元素 横向水平对齐
		alignItems: 'center',     // 元素 横向水平对齐
		paddingTop: 10,
		paddingBottom: 10,
		// backgroundColor:'green',
		// height:14,
		// marginTop: 10,
		// marginBottom: 10,
	},
	// fadingContainer: {
	// 	paddingVertical: 0,
	// 	paddingHorizontal: 0,
	// 	backgroundColor: "powderblue",
		
	// },
	hypIcon: {
		height: 14,
		width: 14,
		// backgroundColor:'#eee',
		
	},
	hyp: {
		color: '#666',
		marginLeft: 7,
		// backgroundColor:'#eee',

	},

});
export default connector(Guess);
