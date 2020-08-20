
##  TabView 选项卡
  - Album -> Tab.tsx
        import { TabView,      SceneRendererProps, TabBar } from 'react-native-tab-view';

        state = {
            routes: [
                { key: 'introduction', title: '简介' },
                { key: 'albums', title: '列表' },
            ],
            index: 1,
        };

        // renderScene = ( props: SceneRendererProps & { route: { key: string; title: string; }} ) => {
        renderScene = ({ route }: { route: IRoute }) => {
            // 上面自己写的, 2 种都可以实现.
            // switch(props.route.key) {
            switch (
                route.key // 上面自己写的, 2 种都可以实现.
            ) {
                case 'introduction':
                    return <Introduction />; // 这里是组件,,不用加 '',不然变成字符串了.
                case 'albums':
                    return <List />;
            }
        };

        // onIndexChange 要改变 组件初始状态, 调用 setState;
        // onIndexChange = (index: number) => index = 1;
        onIndexChange = (index: number) => {
            this.setState({
                index,
            });
        };

        <TabView
				// navigationState={{  // 改成从 state 里读取.
				// 	routes: [
				// 		{ key: 'introduction', title: '简介' },
				// 		{ key: 'albums', title: '列表' },
				// 	],
				// 	index: 1,
				// }}
				navigationState={this.state}
				onIndexChange={this.onIndexChange}
				renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                style={styles.container}
			/>



##  Album -> Tab.tsx

 -  <TabView
		...
        renderTabBar={this.renderTabBar}
	/>


  - // renderTabBar

    renderTabBar = (
		props: SceneRendererProps & {
			navigationState: IState; //NavigationState<T> 改为上面定义的 IState
		},
	) => {
		// 接收 2 个参数,路由和 index
		return (
			<TabBar
				{...props}
				scrollEnabled // scrollEnabled 设为 true  tab 的宽度才能改
				tabStyle={styles.tabStyle} // 改变宽度
				labelStyle={styles.labelStyle} // 字色
                style={styles.tabbar} //设置 tabbar 的背景色,白色;
                indicatorStyle={styles.indicatorStyle} // 设置 下面线条色;
			/>
		); // scrollEnabled 设为 true  tab 的宽度才能改; tabStyle:改变宽度; labelStyle: 字色;style={styles.tabbar}: 设置 tabbar 的背景色,白色;
	};

    上面要引用  IState; 
        interface IRoute {
            key: string;
            title: string;
        }

        interface IState {
            routes: IRoute[]; //数组 []
            index: number;
        }

        interface IProps {}
    

    改变 TabBar 样式属性:
        const styles = StyleSheet.create({
            tabbar: { backgroundColor: '#fff',
            ...Platform.select({ // 改变安卓里的,tab 下边框的 样式. 不要有阴影那些.
                android: {
                    elevation:0,
                    borderBottomColor: '#e3e3e3',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            )
            },
            tabStyle: {
                width: 80,
            },
            labelStyle: {
                color: '#333',
            },
            indicatorStyle:{
                backgroundColor:'#eb6d48',
                borderLeftWidth:20,
                borderRightWidth: 20,
                // borderColor: '#fff',
            },
        });