import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { ICategory } from '@/models/category';
import { RootStackNavigation } from '@/navigator';
import _ from 'lodash';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DragSortableView } from 'react-native-drag-sort';
import { connect, ConnectedProps } from 'react-redux';

import HeaderRightBtn from './HeaderRightBtn';
import Item, { itemHeight, itemMarginBottom, itemWidth, parentWidth } from './Item';

const mapStateToProps = ({ category }: RootState) => ({
	myCategorys: category.myCategorys,
    categorys: category.categorys,
    isEdit: category.isEdit, // 3. 新增类别 和 删除类别如过时编辑状态: 
});


const connector = connect(mapStateToProps);

type ModelSate = ConnectedProps<typeof connector>;

interface IProps extends ModelSate {
	// 2.右上角按钮: 编辑
	navigation: RootStackNavigation;
}

// 定义我的分类
interface IState {
	myCategorys: ICategory[];
}

// 40.新增类别 和 删除类别; 推荐 vip 不能编辑; 定义个数组;
const fixedItems = [0, 1]; // 第 0, 1项;


// // 计算宽度 移到 Item.tsx
// const parentWidth = viewportWidth -10;
// const itemWidth = parentWidth/4;

class Category extends React.Component<IProps, IState> {
	// 这里不会, 我的分类 这里是要保存在用户本地,而不用保存到服务器上.
	state = {
		myCategorys: this.props.myCategorys,
	};
	// 1.右上角按钮: 编辑
	constructor(props: IProps) {
		super(props);
		props.navigation.setOptions({
			// 到上面定义 navigation  // 2.右上角按钮: 编辑
			headerRight: () => (
				<HeaderRightBtn
					onSubmit={this.onSubmit}/* 12. 右上角按钮: 编辑 ; */
				/>
			), // 这个按钮 是根据状态 显示不同文本的. 不用下面的方法, 直接保存 dva 中. 同级目录新建个 HeaderRightBtn 组件.
		});
		// props.navigation.setParams({
		//     title: '编辑'
		// })
		// props.route.params.title
    }
    
    // 10. 新增类别 和 删除类别; 解决编辑状态 退出后,再进入还是编辑状态的问题.
    componentWillUnmount(){
        const {dispatch} = this.props;
        dispatch({
            type: 'category/setState',
            payload:{
                isEdit:false,
            },
        })
    }

	// 12. 右上角按钮: 编辑 ;  定义 onSubmit 函数, 给 HeaderRightBtn 组件使用;
	onSubmit = () => {
        const { dispatch } = this.props; // 从 Props 中拿到 dispatch;
        const { myCategorys } = this.state; // 33.新增类别 和 删除类别; 将数据 保存到 本地存储中, 并保存到 dva 仓库里;点击 '完成' 保存数据;
		dispatch({
            type: 'category/toggle',
            payload: { // 34.新增类别 和 删除类别; 将数据 保存到 本地存储中, 并保存到 dva 仓库里;点击 '完成' 保存数据;
                myCategorys,
            }
		});
    }; // 13. 右上角按钮: 编辑 ; 再转到 HeaderRightBtn.tsx 我们要获取到 dva 中 编辑的状态.
    
    // 9. 新增类别 和 删除类别; 定义 onLongPress 函数; 直接调用, onSubmit 里面的代码, 调用 dispatch 就可以了
    onLongPress = () =>{
        const { dispatch } = this.props; // 从 Props 中拿到 dispatch
		dispatch({
            type: 'category/setState',
            payload: {
                isEdit: true,
            }
		});
    }
 
    // 12. 新增类别 和 删除类别; 点击 item 执行添加到我的分类里.onPress,需要传递参数:item index, 添加的是那个?
    // 22. 新增类别 和 删除类别; 点击 我的分类 里的 item 删除 item, 然后 item 返回到所有分类里.传入第三个参数 myCategorysSelected, 判断是否选择.
    onPress = (item:ICategory, index:number, myCategorysDelete:boolean) => {
        const {isEdit} = this.props;
        const {myCategorys} = this.state;
        
        console.log('==============',myCategorys)
        // 46.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值;
        const disabled = fixedItems.indexOf(index) > -1;
        console.log('ssssssss',fixedItems.indexOf(index))
        if(isEdit) { // 处于编辑状态下,才有用.
            
            // 23. 新增类别 和 删除类别; 点击 我的分类 里的 item 删除 item, 然后 item 返回到所有分类里.传入第三个参数 myCategorysSelected, 判断是否选择.
            if(myCategorysDelete) {
                if(disabled) return; // 这句得加在这里, 不然所有分类里的第1,2 个也添加不到我的分类.
                this.setState({ 
                    myCategorys: myCategorys.filter(DeleteItem => DeleteItem.id !== item.id ), // 过滤掉 我的分类 删除的 id 不是 所有分类item 里的 id
                })
            } else {
                // 还没选到 我的分类 里的, 追加进去.
                this.setState({ 
                    myCategorys: myCategorys.concat([item]),// 用 push 都是在原来的数据上进行修改的; 在 react中, 最好是返回个新的数组.concat;
                })
            }
            
        }
    }

    // 5.10-9 类别拖拽; 点击事件,可以接受 2 个参数, data item
    onClickItem = (data: ICategory[], item: ICategory) => {
        this.onPress(item, data.indexOf(item), true);
    }


    // 2.10-9 类别拖拽; 拖拽后的回调函数. 可以得到 data, 拖拽组件会帮我们计算好排序.
    onDataChange = (data: ICategory[]) => {
        this.setState({
            myCategorys: data,
        })
    }

	renderItem = (item: ICategory, index: number) => {
        const {isEdit} = this.props; // 4. 新增类别 和 删除类别如过时编辑状态: 
        // 41.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值;
        const disabled = fixedItems.indexOf(index) > -1;
		return (
			// 所有遍历出来的,,都要定义 key
			// 下面把这个 item 移除去, 直接新建个组件. Item.tsx
			// <View key={index} style={styles.items}>
			//     <View style={styles.itemText}>
			//         <Text>{item.name}</Text>
			//     </View>
            // </View>

            // 21. 新增类别 和 删除类别; 点击 我的分类 里的 item 删除 item, 然后 item 返回到所有分类里.在 renderItem 和 renderUnSelectItem 函数里的 onPress 事件里,都传入第三个参数, 判断是 已选择,还是 未选择.renderItem 里传 true;
            // 3.10-9 类别拖拽; 注释 Touchable这个外包组件,因为 DragSortableView 拖拽组件内置了一个 touchable, 起冲突, 所以这里要注释了. 能拖拽了,但是 onPress 的事件没了. 直接在 DragSortableView 组件里 加点击事件 onClickItem={this.onClickItem}
            // <Touchable key={item.id} onPress={() => this.onPress(item, index, true)} onLongPress={this.onLongPress}>
            <Item 
                key={item.id}
                disabled={disabled} // 42.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值; 转 item 子 组件,增加这个属性.
                data={item} 
                // 5. 新增类别 和 删除类别如过时编辑状态: 
                isEdit={isEdit}
                // 6. 新增类别 和 删除类别如过时编辑状态: selected 选泽了,传 true. 但是我们还有个没选中的. 要新建个 renderUnSelectItem 函数
                selected // 可以简写成 selected === selected={true}
            />
            // </Touchable>
		);
    };

    // 7. 新增类别 和 删除类别如过时编辑状态: selected 选泽了,传 true. 但是我们还有个没选中的. 要新建个 renderUnSelectItem 函数
    renderUnSelectItem = (item: ICategory, index: number) => {
        const {isEdit} = this.props; 
        // const disabled = fixedItems.indexOf(index) > -1;
        // 8. 新增类别 和 删除类别; 给 renderItem 里面的 item 外面包一个 Touchable 组件, onLongPress
        // 11. 新增类别 和 删除类别; 点击 item 执行添加到我的分类里.onPress, 需要传递参数:item index, 添加的是那个?
        // 20. 新增类别 和 删除类别; 点击 我的分类 里的 item 删除 item, 然后 item 返回到所有分类里.在 renderItem 和 renderUnSelectItem 函数里的 onPress 事件里,都传入第三个参数, 判断是 已选择,还是 未选择.renderUnSelectItem 里传 false;
        return (
            <Touchable key={item.id} onPress={() => this.onPress(item, index, false)} onLongPress={this.onLongPress}>
                {/* // 42.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值; 转 item 子 组件,增加这个属性. // 这里必须传个 disabled 就传个 false 就可以了. 或者之前到定义 disabled 类型的地方 直接加个? 非必填*/}
                <Item key={item.id} data={item} isEdit={isEdit} selected ={false} />
            </Touchable>)
    }



	render() {
		const { myCategorys } = this.state; // 这里是不 porops
		const { categorys, isEdit } = this.props;
		// console.log('=======',this.props);
		/**
         * 需要对 categorys 重新分组 (推荐,知识,娱乐,生活)
         * data 里面的 key 就是, 值是: id name classify
         * 
         * 这里要安装第三方库, yarn add lodash, 我们使用的是 它的函数 FUNCTION ; 具体地址: https://www.lodashjs.com/docs/lodash.groupBy
         * _.groupBy(collection, [iteratee=_.identity])
         * 
            _.groupBy([6.1, 4.2, 6.3], Math.floor);
            // => { '4': [4.2], '6': [6.1, 6.3] }
            
            // The `_.property` iteratee shorthand.
            _.groupBy(['one', 'two', 'three'], 'length');
            // => { '3': ['one', 'two'], '5': ['three'] }

            {
                "id": "2",
                "name": "小说",      
                "classify": "推荐"   // classify 属于哪个小组. (推荐,知识,娱乐,生活这些组.)
            },
         */
		const classifyGroup = _.groupBy(categorys, item => item.classify); // 然后到下面遍历这个 classifyGroup ,返回一个组成聚合的对象。
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.classifyName}>我的分类</Text>
				<View style={styles.classifyView}>
                    {/* 1.10-9 类别拖拽  {myCategorys.map(this.renderItem)} 改成 可拖拽的组件 DragSortableView*/}
                    <DragSortableView 
                        dataSource={myCategorys}
                        renderItem={this.renderItem}
                        sortable={isEdit} // 只有在编辑状态下,可以拖拽. 从 this.props 里取isEdit;
                        keyExtractor={ item => item.id} // 指定 Key 值;
                        onDataChange={this.onDataChange} // 拖拽之后的回调 函数.
                        parentWidth={parentWidth} // 从 item中导入的
                        childrenHeight={itemHeight}
                        childrenWidth={itemWidth}
                        onClickItem={this.onClickItem} // 4.10-9 类别拖拽; 点击事件;  转上面 要改这个方法;
                        fixedItems={fixedItems}// // 6.10-9 类别拖拽; 点击事件,可以接受 2 个参数, data item 第一第二个不能拖拽; 
                        marginChildrenBottom={itemMarginBottom}
                    />
				</View>

				{Object.keys(classifyGroup).map(
					/**key */ classify => {
						return (
							<View key={classify}>
								<Text style={styles.classifyName}>
									{classify}
								</Text>
								{/* <View style={styles.classifyView}>{ categorys.map(this.renderItem) }</View> 
                                     categorys   改为:  classifyGroup[classify]
                                */}
								<View style={styles.classifyView}>
									{classifyGroup[classify].map(
                                        // 8. 新增类别 和 删除类别; this.renderItem 改为 this.renderUnSelectItem;
                                        // this.renderUnSelectItem,

                                         // 13. 新增类别 和 删除类别; 解决添加到 我的分类里后 在所有分类里不显示;  把上面这句改为下面:
                                        (item, index) => {
                                            if(myCategorys.find(selectedItem => selectedItem.id === item.id)) {
                                                // 如果在 我的分类 里找到了选中的 Item, 所有分类里我们就不返回了这个 item;
                                                return null;
                                            }
                                            return this.renderUnSelectItem(item, index); // 其他没找到的,继续返回.
                                        }
									)}
								</View>
							</View>
						);
					},
				)}

				{/* 
                初始的写法,改成上面的.
                <Text style={styles.classifyName}>所有分类</Text>
                <View style={styles.classifyView}>{ categorys.map(this.renderItem) }</View>  
                */}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f6f6',
	},
	classifyName: {
		fontSize: 16,
		marginBottom: 8,
		marginTop: 14,
		marginLeft: 10,
	},
	classifyView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5,
	},
});

export default connector(Category); // connector
