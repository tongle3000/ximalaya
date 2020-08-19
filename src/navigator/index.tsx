import BottomTabs from '@/navigator/BottomTabs';
import Category from '@/pages/Category';
import Detail from '@/pages/Detail';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
    TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';

// type 类型别名: 相当于重命名,并给它定义独有的属性, 起到一个约束的作用. 约束泛型的类型.
export type RootStackParamList = {
    BottomTabs:{
        screen?: string;
    };
    Category: undefined;
    Detail: {
        id: number;
    };
};
let Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;


class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerBackTitleVisible:false, // 设置 Back 不可见;
                        headerTintColor: '#333', // 设置 标题 和 '返回箭头' 颜色;
                        headerTitleAlign: 'center',
                        headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit, // 动画效果改变.
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true, // android 可拖动最左边 返回
                        gestureDirection: 'horizontal', // android 水平方向滚动页面
                        // 在标题顶部添加额外的填充以说明半透明的状态栏。
                        // 默认情况下，它使用设备安全区域插图中的最大值。传递0或自定义值以禁用默认行为，并自定义高度。
                        // headerStatusBarHeight: StatusBar.currentHeight, // 视频有加这个,我加这个, IOS headerTitle不显示,且高度没有.
                        ... Platform.select({
                            android :{
                                headerStatusBarHeight: StatusBar.currentHeight, // 只安卓 android 上执行状态栏高度.
                            }
                        }),
                        
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth, // 修改 android 安卓 状态栏的底边框.
                                },
                                ios: {
                                    backgroundColor: '#eee',
                                },
                            }),
                            // backgroundColor: 'red',
                        },
                        // headerTitleStyle:{color:'#ffffff'}
                    }}
                >
                    <Stack.Screen
                        // options={{ title: '首页' }}
                        // options={{ headerShown:false }} // 隐藏头部标题.
                        // tab 的头会一直显示 "首页", 我们现在要改成读取路由的

                        name="BottomTabs"
                        component={BottomTabs}
                        options={{ title:'首页',}}
                    />
                    
                    <Stack.Screen
                        options={{ title: '分类'}}
                        name="Category"
                        component={Category}
                    />
                    <Stack.Screen
                        options={{ title: '详情页', headerShown: false, }}
                        name="Detail"
                        component={Detail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;
