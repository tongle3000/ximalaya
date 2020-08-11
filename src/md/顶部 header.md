


##  TopBar 自定义组件
    pages -> 新建 文件夹 views -> TopTabBarWrapper.tsx


##  HomeTabs.tsx
    Tab.Navigator 有个属性: TabBar, 这个属性,可以返回一个函数,且这个函数可以是一个组件. 所以我们有这个定义返回的组件.

    tabBar={this.renderTabBar} // 7.修改首页顶部; 这个可以返回一个组件.


    // 8.修改首页顶部; 这个可以返回一个组件. 他能接收 props:MaterialTopTabBarProps, 还能接收 MaterialTopTabBar 组件
	renderTabBar = (props: MaterialTopTabBarProps) => {
		// 9.修改首页顶部;  pages -> views -> TopTabBarWrapper.tsx 自定义组件,下面直接引入这个组件. 传入{...props}
		return <TopTabBarWrapper {...props} />
	}


    import { getStatusBarHeight } from 'react-native-iphone-x-helper';  // 系统的 状态栏高度.

    paddingTop: getStatusBarHeight(), // 系统的 状态栏高度.



##  TobTabBarWrapper.tsx
        import IconFont from '@/assets/iconfont';
        import Touchable from '@/components/Touchable';
        import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
        import React from 'react';
        import { StatusBar, StyleSheet, Text, View } from 'react-native';
        import { getStatusBarHeight } from 'react-native-iphone-x-helper';


        // 这个是计算 手机顶部状态栏(信号,刘海那个高度.) 高度的 import {getStatusBarHeight} from 'react-native-iphone-x-helper';
        // 得到这个高度,我们就可以直接 paddingTop 这个高度. 这样,material-top-tabs 就不会被档了.


        interface IProps extends MaterialTopTabBarProps {

        }

        class TopTabBarWrapper extends React.PureComponent<IProps> {
            render() {

                const {props} = this;
                return (
                    <View style={styles.container}>
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
 
##  渐变色:   官方教程: https://www.npmjs.com/package/react-native-linear-gradient
    npm install react-native-linear-gradient --save

    下面两步 === npx pod-install
    cd ios
    pod install



##  // 不显示顶部头部
    export const options: StackNavigationOptions = {
        headerShown: false,
    };