


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

  - TopTabWrapper.tsx 页面代码:

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
                        <LinearGradient colors={['#999', '#eee']} style={styles.linearGradient}></LinearGradient>
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





  - 背景渐变颜色我们要 读取 数据里, 这时显示当前图片的 状态  activeSlide: index, 要改成 "activeCarouselIndex" 显示的圆点的状态, 这个属性要设置在 home.ts 的 HomeState 里.
    home.ts 文件里增加  activeCarouselIndex type  和定义初始值.

    const mapStateToProps = ({home}: RootState) => {
        // console.log(home.activeCarouselIndex, home.carousels[home.activeCarouselIndex]);
        // 打印: 1 {"colors": ["#f2c579", "#a179f2"], "id": "220000201408196775", "image": "http://39.105.213.120/images/20.jpg"}
        // 我做的时候报错, 是因为 color 我MOCK 数据时是没加 s 的,所以报错.
        return{
            linearColors: home.carousels ? home.carousels[home.activeCarouselIndex].colors : undefined,
        }
    }

    const connector = connect(mapStateToProps);

    type ModelState = ConnectedProps<typeof connector>;

    // interface IProps extends MaterialTopTabBarProps {}
    // 不能用 interface 接口,他不能继承多个, 所以要改成 type 联合类型
    type IProps = MaterialTopTabBarProps & ModelState;

    // render 前
    get linearGradient() {
        const {linearColors = ['#ccc', '#e2e2e2']} = this.props; // colors 可能是 undefined ,所以给它顶一个默认值.

        console.log(linearColors);

        return(
            <LinearGradient colors={linearColors} style={styles.linearGradient} />
        )
    }

    { this.linearGradient }

##  动画渐变色:  就是渐变色变换的时候, 是个动画,不会很死板的变色.
    安装: yarn add react-native-linear-animated-gradient-transition

    TopTabBarWrapper.tsx

    import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';

    <LinearAnimatedGradientTransition
				colors={linearColors}
				style={styles.linearGradient}
			/>
    其他设置  跟 LinearGradient 一样.

##  设置滚动上去渐变背景色消失.  (滚动监听事件: 目的,拿到滚动的 Y 坐标, 在滚动事件中调用 action, 将 Y 坐标保存到 DVA 仓库中.我们真的需要的是一个状态, 是否超过一定到高度,超过,背景色消失.)
  - home -> index.tsx
        FlatList 有个属性 onScroll
        onScroll={this.onScroll}  


        // 2.设置滚动上去渐变背景色消失; 滚动事件监听, 真正需要的是一个状态
        onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
            const offsetY = nativeEvent.contentOffset.y; // 滚动的高度.
            console.log(offsetY);

            // 滚动的高度 < 轮播图的高度(180).  true;
            // 开始时, 都是 true = true;  newGradientVisible !== gradientVisible 只有不等于的时候执行 dispatch

            // 当 offsetY = slideHeight 时, 就是 newGradientVisible = false,大于等于 180, 这时就是 true=false, 再执行dispatch, 就把 false 赋值给了 gradientVisible=false,隐藏背景, 成了 false = false; 

            // 当 offsetY = slideHeight 时, newGradientVisible 为 true 小于 180 时,false true, 执行 dipatch, 把 true 赋值给 gradientVisible= true ,又显示背景图.

            let newGradientVisible = offsetY < slideHeight; // 3.设置滚动上去渐变背景色消失; slideHeight 在Carousel.tsx 文件里导出.

            const {dispatch, gradientVisible} = this.props; // 4.设置滚动上去渐变背景色消失; gradientVisible要再 Models -> home.ts 定义个默认值true. gradientVisible: boolean; 

            console.log(newGradientVisible,gradientVisible); // true true; true false; false false
            
            if(newGradientVisible !== gradientVisible) { // true false 隐藏 或 false true 显示 执行下面的 dispatch ;  // true 显示渐变色组件. 如果现在的Y高度跟新的高度一样.
                dispatch({
                    type: 'home/setState',
                    payload:{
                        gradientVisible: newGradientVisible, // 能拿到状态, 转 TopTabBarWrapper.tsx // 7.设置滚动上去渐变背景色消失;
                    }
                })
            }
        };

  - home.ts
        gradientVisible: boolean; // 4.设置滚动上去渐变背景色消失; gradientVisible要再 Models -> home.ts 定义个默认值.

        gradientVisible: true, // 5.设置滚动上去渐变背景色消失; gradientVisible要再 Models -> home.ts 定义个默认值.

  - TopTabBarWrapper.tsx
        get linearGradient() {
            // 7.设置滚动上去渐变背景色消失; gradientVisible
            const { gradientVisible, linearColors = ['#ccc', '#e2e2e2'] } = this.props; // colors 可能是 undefined ,所以给它顶一个默认值.
            if(gradientVisible) { // true 显示渐变色组件.
                return (
                    // <LinearGradient colors={linearColors} style={styles.linearGradient} />
                    <LinearAnimatedGradientTransition
                        colors={linearColors}
                        style={styles.linearGradient}
                    />
                );
            } 
            return null;
            // console.log(linearColors);
        }
    

##  1.顶部字颜色控制: 背景色显示,字白色; 滚动上去背景隐藏,字黑色;  TopTabBarWrapper.tsx

    render() {
		// const { props } = this;
		// 1.顶部字颜色控制: 背景色显示,字白色; 滚动上去背景隐藏,字黑色;
		// 下面return 里的  style={textStyle} 都是.
		let { gradientVisible, indicatorStyle, ...restProps} = this.props;
		let textStyle=styles.text;
		let topColor='#333';
		let searchBtn=styles.searchBtn;
		if(gradientVisible) {
			textStyle = styles.whiteText;
			topColor='#fff';
			indicatorStyle = StyleSheet.compose(indicatorStyle, styles.whiteBackground);
			searchBtn = StyleSheet.compose(searchBtn, styles.searchWhiteBg);
		}

		return (
			<View style={styles.container}>
				{this.linearGradient}
				{/* 渐变色: HomeTabs.tsx -> Tab.Navigator设置 sceneContainerStyle={styles.sceneContainer} // 为了taby实现渐变色, 这里设置透明. */}
                
				{/* 改到上面 get LinearGradient() <LinearGradient colors={['#999', '#eee']} style={styles.linearGradient}></LinearGradient> */}

				<View style={styles.topTabBarView}>
					{/* 3.顶部字颜色控制:activeTintColor={topColor}要放到{...restProps} 后面, 上面给它顶一个默认值.inactiveTintColor不是当前的 tab色  */}
					<MaterialTopTabBar {...restProps} indicatorStyle={indicatorStyle} activeTintColor={topColor} inactiveTintColor={topColor} style={styles.topBar} />
					<Touchable style={styles.categoryBtn}>
						<Text style={textStyle}>分类</Text>
					</Touchable>
				</View>
				<View style={styles.bottomView}>
					<Touchable style={searchBtn}>
						<Text style={styles.searchText}>搜索按钮</Text>
					</Touchable>
					<Touchable style={styles.historyBtn}>
						<IconFont
							name="icon-shijian"
							color={topColor} // 2.顶部字颜色控制: 背景色显示,字白色; 滚动上去背景隐藏,字黑色;
							size={22}
						/>
					</Touchable>
				</View>
			</View>
		);
	}




##  ERROR    TypeError: undefined is not an object (evaluating 'home.carousels[home.activeCarouselIndex].colors')
    TopTabBarWrapper.tsx 里的代码: 
        linearColors: home.carousels 
            ? home.carousels[home.activeCarouselIndex].colors 
            : undefined,

    轮播图背景色,报这个错,, 缓存问题, home.carousels 被情况, 但是 index 在 1234 状态. 我们判断下,如果 index 存在,赋值 颜色,,不存在赋 undefined.


        linearColors: home.carousels                              // 如果数组存在
			? home.carousels[home.activeCarouselIndex]                // 如果下标 index 存在
				? home.carousels[home.activeCarouselIndex].colors     // 赋值 colors
				: undefined                                           // 否则 undefined
			: undefined,                                          // 否则 undefined



##  使用 React.PureComponent 报错: Invariant Violation: requireNativeComponent: "BVLinearGradient" was not found in the UIManager.
    LinearGradient 渐变组件: 因为我使用了 React.PureComponent 一直报 "BVLinearGradient" 在 UI (UIManager) 组件里找不到. PureComponent 改回 Component 就可以了.







##  // 不显示顶部头部
    export const options: StackNavigationOptions = {
        headerShown: false,
    };