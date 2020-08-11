import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

// import BVLinearGraient from 'react-native';
// 这个是计算 手机顶部状态栏(信号,刘海那个高度.) 高度的 import {getStatusBarHeight} from 'react-native-iphone-x-helper';
// 得到这个高度,我们就可以直接 paddingTop 这个高度. 这样,material-top-tabs 就不会被档了.


interface IProps extends MaterialTopTabBarProps {}

class TopTabBarWrapper extends React.Component<IProps> {
    render() {

        const {props} = this;
        return (
            <View style={styles.container}>
                {/* 渐变色: HomeTabs.tsx -> Tab.Navigator设置 sceneContainerStyle={styles.sceneContainer} // 为了taby实现渐变色, 这里设置透明. */} 
                <LinearGradient colors={['red', 'blue']} style={styles.linearGradient}></LinearGradient>
                    <View style={styles.topTabBarView}>
                        <MaterialTopTabBar {...props} style={styles.topBar} />
                        <Touchable style={styles.categoryBtn}><Text>分类</Text></Touchable>
                    </View>
                    <View style={styles.bottomView}>
                        <Touchable style={styles.searchBtn}><Text>搜索按钮</Text></Touchable>
                        <Touchable style={styles.historyBtn}><IconFont name="icon-shijian" color={'#000'} size={22} /></Touchable>
                    </View>
                
			</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: getStatusBarHeight(), // 系统的 状态栏高度.
    },
    linearGradient:{
        ...StyleSheet.absoluteFillObject, // position: 'absolute'; left top bottom right都是0, 就是撑满整个屏幕.
        height:260,
    },
    topBar: {
        elevation: 0, // android 顶部状态栏 底部的阴影去掉;
        flex:1, // 占剩余空间
        backgroundColor:'transparent',
        overflow:'scroll',

    },
    topTabBarView:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryBtn:{
        paddingHorizontal:16,
        borderLeftWidth:StyleSheet.hairlineWidth,
        borderLeftColor:'#ccc',
    },
    bottomView:{
        flexDirection: 'row',
        paddingHorizontal:16,
        alignItems: 'center',
        paddingVertical:5,
    },
    searchBtn:{
        flex:1,
        paddingLeft:16,
        height: 34,
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(0,0,0, .1)',
    },
    historyBtn:{
        flexDirection:'row',
        marginLeft:12,
    },
});


export default TopTabBarWrapper;
