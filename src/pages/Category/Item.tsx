import { ICategory } from '@/models/category';
import { viewportWidth } from '@/utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const parentWidth = viewportWidth -10; // 导出,供 首页的 拖拽组件使用
export const itemWidth = parentWidth/4;
// 加个高度,因为拖拽组件要求要有高度;
export const itemHeight= 38;
export const itemMarginBottom=10;

/**
 * <Item data={item} />
 * 
 * 首页通过 data = {item} 就读到数据了;
 */
interface IProps {
    data: ICategory;
    selected: boolean; // 1. 新增类别 和 删除类别
    isEdit: boolean;   // 1. 新增类别 和 删除类别
    disabled?: boolean; // 43.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值; 转 item 子 组件,增加这个属性.// 非必填,所有分类里不用这个灰色不能操作的状态.
}

class Item extends React.Component<IProps> {
    render() {
        // 44.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值; disabled.
        const {data, selected, isEdit, disabled} = this.props;
        return (
            <View key={data.id} style={styles.items}>
                <View style={[styles.itemText, /* disabled 样式,要改成数组加[]. */disabled && styles.disabled]}>
                    <Text>{data.name}</Text>
                    {
                        // 2. 新增类别 和 删除类别如过时编辑状态: 
                        // 45.新增类别 和 删除类别; 推荐 vip 不能编辑; 判断一个值; 也不是 disabled 状态.
                        isEdit && !disabled && (
                            <View style={styles.EditIcon}>
                                <Text style={styles.EditIconText}>{selected ? '-' : '+'}</Text>
                            </View>
                        )
                    }
                </View>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    items:{
        width: itemWidth,
        marginVertical: 5,
        height:38,
    },
    itemText: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:5,
        borderRadius:4,
    },
    EditIcon:{
        position: 'absolute',
        top: -5,
        right:-5,
        height:16,
        width:16,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f86442',
        borderRadius:8,
    },
    EditIconText:{
        color:'#fff',
        lineHeight: 15,
    },
    disabled:{
        backgroundColor:'#ccc'
    },
})

export default Item;