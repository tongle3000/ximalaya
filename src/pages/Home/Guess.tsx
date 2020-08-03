import { RootState } from '@/models';
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

class Guess extends React.Component<ModelState> {
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

	// 返回的是个组件, 这里使用 View, 图片必须制定宽高.
	// }
	renderItem = ({ item }) => {
		return (
			<View style ={styles.item}>
                <Image source = {{uri: item.image}} style={ styles.image} /> 
				<Text numberOfLines={2}>{item.title}</Text>
                {/* numberOfLines={2} 最多显示 2 行. */}
			</View>
		);
	};

	render() {
		const { guess } = this.props;
		return (
			<View style={styles.container}>
				<Text>猜你喜欢data</Text>
				{/* <Text>{JSON.stringify(guess)}</Text> JSON.stringify(guess) 打印出了 json 代码  */}
				{/* FlatList 展示数据, 先上面从 react-native 引入这个组件 */}
                <FlatList 
                    data={guess} 
                    renderItem={this.renderItem} 
                    numColumns={3} // 3 列
                    
                />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 8,
		margin: 16,
    },
    item: {
        flex:1,
        alignItems: 'center',
        marginVertical: 6,   // 外 竖向: 元素 与 元素之间的 边距 8
        marginHorizontal: 10, // 外 横向: 元素 与 元素之间的 边距 5
    },
    image: {
        width: '100%',
        height:100,
        borderRadius: 8,
        marginBottom: 4,
    }
});
export default connector(Guess);
