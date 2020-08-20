import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { IProgram } from '@/models/album';
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import Item from './Item';


const mapStateToProps = ({ album }: RootState) => {
	return {
		list: album.list,
	};
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

class List extends React.Component<IProps> {
    onPress = (data: IProgram) => {
        alert('节目');
    }

	keyExtractor = (item: IProgram) => item.id;

	renderItem = ({item, index}:{item:IProgram, index:number}) => { // 这句跟下面这句功能相同
	// renderItem = ({ item, index }: ListRenderItemInfo<IProgram>) => {
		//ListRenderItemInfo 不是 ListRenderItem(这个会找不到 item, index)
		return (
            <Item data = {item} index ={index} onPress={this.onPress} />
			// <Touchable>
			// 	<Text>{item.title}</Text>
			// </Touchable>
		); // 得 包个 Text ,不然报: Error: Text strings must be rendered within a <Text> component.
	};

	render() {
		const { list } = this.props;
		return (
			<FlatList
				data={list}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
			/>
		);
	}
}

export default connector(List);
