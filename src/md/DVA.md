##  DVA 框架  数据状态管理
    config -> dva.ts
    models -> home.ts, index.ts
    pages -> dva -> home.tsx  // 这个文件之前路径是 one文件夹 现在改成 dva. 下面的 one都改成 dva

##  yarn add dva-core-ts react-redux

##  yarn add @types/react-redux  (react-redux 声明文件的包; @types 开头的,都是些 JS 库的 TS 声明文件,由微软官方在维护.)



##  dva.ts (config 新建文件)

    // 1.创建实例


    // 2.加载 model 对象( 要引入models index)

    // 3.启动 dva

    // 4.导出 dva 的数据

 *  代码:
        import models from '@/models';
        import { create } from 'dva-core-ts';

        // 1.创建实例
        const app = create();

        // 2.加载 model 对象
        models.forEach(model => {
            app.model(model); // 通过 app.model 方法,把取到的 model 放进去.这样就把这个 model 加载进来了
        })

        // 3.启动 dva
        app.start();

        // 4.导出 dva 的数据
        const store = app._store; // 获取 redux 的 store 对象供 react-redux 使用.

        export default app._store;

##  home.ts (models 文件夹新建 )
        /**
        * HomeModle
        * 供 config dva.ts 引用.
        */

        import { Model, Effect } from 'dva-core-ts';
        import { Reducer } from 'redux';

        // Reducer
        interface HomeState {
            num: number;
        }

        // 声明接口
        interface HomeModel extends Model {
            namespace: 'home'; // namespace: string;
            
            state: {
                //state?: any;
                num: number;
            };
            
            // reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
            reducers: {
                add: Reducer<HomeState>; // 到上面声明个
            };
            
            // effects?: EffectsMapObject;
            // effects: {
            // 	// 里面定义一个 action
            // 	asyncAdd: Effect;
            // };
            
            // subscriptions?: SubscriptionsMapObject;
        }

        // 下面 state 报 "HomeState | undefined"
        // 这里可以把 state 提出去,顶一个初始的 state
        const initialState = {
            num: 0,
        }

        const homeModel: HomeModel = { // 报"在此处声明了 "effects" 错误, 先把上面effects 注释了, effects是异步,先做同步的.
            namespace: 'home',
            state: {
                num: 0,
            },
            reducers: {
                add(state=initialState, { payload /* ,type */ }) {
                    // dva 已经帮我们处理了 action, 可以通过结构的方法直接取到; 如果需要 type 可以写上

                    // payload 会返回一个对象
                    return {
                        ...state, // 旧的 state
                        num: state.num + payload.num, // 新的属性; 以前的 + 新的payload.num
                        // state 报 "HomeState | undefined", 可以把 state 提出去,顶一个初始的 state, 上面个 state 一个默认值 state=initialState
                                                    
                    }
                },
            },
        };

        export default homeModel;





##  index.ts (models 文件夹新建 )
    /**
    * 导出所有的 model 文件
    * 定义 model 类型
    */
    import home from './home';

    const models =[home];

    // 导出每个 model 的 类型
    export type RootState = {
        home: typeof home.state;
    }

    export default models;


##  src/index.tsx 改成 provider react-redux 
    开始的: 
        // import Navigator from '@/navigator/one';
        // export default Navigator;

  * 改成现在的: 加入了 react-redux  的 provider 组件, 使用了它的功能.  引入了 dva 的 store 
        import store from '@/config/dva';
        import Navigator from '@/navigator/one';
        import React from 'react';
        import { Provider } from 'react-redux';

        export default class extends React.Component { // 这里是省略 calss 名字写法,也是可以的.
            render() {
                return (
                    // Provider 这个的作业, 让它里面包裹的组件,都能得到 store = {store} 的值
                    <Provider store = {store} >
                        <Navigator />
                    </Provider>
                );
            }
        }
##  one/ home.tsx  (怎么接受 dva 里面的 num呢, react-redux connect )

        import { RootState } from '@/models';

        import { RootStackNavigation } from '@/navigator/one';
        import React from 'react';
        import { Button, Text, View } from 'react-native';

        import { connect, ConnectedProps } from 'react-redux';


        const mapStateToProps= ({home}: RootState) => ({ //state 改成 对象结构的方法 {home}
            num: home.num,
        });

        // connect 帮我们把 models 里定义的 state 映射到 这个页面来.
        const connector = connect(mapStateToProps);

        type ModelState = ConnectedProps<typeof connector>

        interface IProps extends ModelState {
            navigation: RootStackNavigation;
        };

        // type IProps = {
        //     navigation: RootStackNavigation;
        // };

        class Home extends React.Component<IProps> {
            onPress = () => {
                const { navigation } = this.props;
                navigation.navigate('Detail', {
                    id: 200,
                });
            };

            // 加法 运算 方法.
            handleAdd = ()=> {
                const {dispatch} = this.props;
                dispatch({
                    type: 'home/add', // 这里是找到 dva.ts 里的 HomeModel 里的 add() 方法
                    payload: {        // 第二个参数
                        num: 10,      // 每次加 10
                    }
                })
            }

            render() {
                const {num} = this.props;   // 从 dva home 里取 num
                return (
                    <View>
                        <Text>Home--{num}--</Text>
                        <Button title='加法' onPress={this.handleAdd} />
                        <Button title="跳转到详情页1" onPress={this.onPress} />
                    </View>
                );
            }
        }

        export default connector(Home);

##  异步加 (请求后天接口, 进行异步的加法)
    dva models -> home.ts 文件 取消下面的注释
    // effects: {
	// 	// 里面定义一个 action
	// 	asyncAdd: Effect;
    // };

  #  home.ts 文件改为 ( 下面 * 号的, 表示跟之前不一样的地方, 是修改 或者 增加的.)

        import { Effect, Model } from 'dva-core-ts';
        import { Reducer } from 'redux';

        /**
        * HomeModle
        * 供 config dva.ts 引用.
        */

        // Reducer
        interface HomeState {
            num: number;
        }

        // 声明接口
        interface HomeModel extends Model {
            namespace: 'home'; // namespace: string;
            
            state: {
                //state?: any;
                num: number;
            };
            
            // reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
            reducers: {
                add: Reducer<HomeState>; // 到上面声明个
            };
            
            // effects?: EffectsMapObject;
  *         effects: {
                // 里面定义一个 action
                asyncAdd: Effect;
            };
            
            // subscriptions?: SubscriptionsMapObject;
        }

        // 下面 state 报 "HomeState | undefined"
        // 这里可以把 state 提出去,顶一个初始的 state
        const initialState = {
            num: 0,
        }

  *     // 延迟函数, 模拟异步的.
        function delay(timeout: number) {
            return new Promise(resolve => {
                setTimeout(resolve, timeout);
            })
        }

        const homeModel: HomeModel = { // 报"在此处声明了 "effects" 错误, 先把上面effects 注释了, effects是异步,先做同步的.
            namespace: 'home',
            state: {
                num: 1,
            },
            reducers: {
                add(state=initialState, { payload /* ,type */ }) {
                    // dva 已经帮我们处理了 action, 可以通过结构的方法直接取到; 如果需要 type 可以写上

                    // payload 会返回一个对象
                    return {
                        ...state, // 旧的 state
                        num: state.num + payload.num, // 新的属性; 以前的 + 新的payload.num
                        // state 报 "HomeState | undefined", 可以把 state 提出去,顶一个初始的 state, 上面个 state 一个默认值 state=initialState
                                                    
                    }
                },
            },
  *         effects: {
                *asyncAdd({payload}, {call, put}) { // action 改 {payload}
                    yield call(delay, 3000); // 调用上面的方法, 第 2 个参数 3000
                    yield put({ // put 接收 action
                        type: 'add',
                        payload, // 这个不做处理,直接传进来
                    });
                }
            },
        };

        export default homeModel;


  # one/home.tsx 增加的地方
    // 异步加:   点了之后,会过段时间处理,  中间等的时间长的话,可以提示下用户 "正在加载..."
    ① 添加个异步方法
    asyncAdd= () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/asyncAdd', // 这里是找到 dva.ts 里的 HomeModel 里的 add() 方法
            payload: {        // 第二个参数
                num: 3,      // 每次加 10
            }
        })
    }

    ② 给个按钮, 调用异步方法.
    <Button title='异步加法' onPress={this. asyncAdd} />

    总结: 异步与同步不同的地方就是 type: 调用的 dva 里的 方法不一样就是,其他都一样.


  # 异步加载 提示"正在加载..." dva 有相关的组件 dva-loading
    由于 dva-loading 组件兼容性不是很好, 这里也 自己在加工下.

    安装: yarn add dva-loading-ts

  * config -> dva.ts
        import createLoading from 'dva-loading-ts';

        // use 方法必须在 start() 方法之前使用.
        app.use(createLoading()); 

  *     dva.ts 完整代码:: 
            import models from '@/models';
            import { create } from 'dva-core-ts';
            import createLoading from 'dva-loading-ts';

            // 1.创建实例
            const app = create();

            // 2.加载 model 对象
            models.forEach(model => {
                app.model(model); // 通过 app.model 方法,把取到的 model 放进去.这样就把这个 model 加载进来了
            })

            // use 方法必须在 start() 方法之前使用.
            app.use(createLoading()); 
            // 3.启动 dva
            app.start();

            // 4.导出 dva 的数据
            const store = app._store; // 获取 redux 的 store 对象供 react-redux 使用.

            export default store;

  * models -> index.ts 文件
        增加的代码:
        import {DvaLoadingState} from 'dva-loading-ts';
        
        loading: DvaLoadingState;

        完整代码:
            import { DvaLoadingState } from 'dva-loading-ts';
            import home from './home';

            /**
            * 导出所有的 model 文件
            * 定义 model 类型
            */
            const models =[home];

            // 导出每个 model 的 类型
            export type RootState = {
                home: typeof home.state;
                loading: DvaLoadingState;
            }

            export default models;


  * one -> home.tsx 文件

        // dva ; 正在加载..:loading,loading.effects['home/asyncAdd'];
        const mapStateToProps= ({home, loading}: RootState) => ({ //state 改成 对象结构的方法 {home}
            num: home.num,
            loading: loading.effects['home/asyncAdd'],     // 跟异步操作的 type 值是一样的
        });

        {num} 前面加入下面这些:
        <Text>异步加法--{loading ? '正在努力计算中...' : '' } {num}--</Text>

  *     完整代码:
            import { RootState } from '@/models';
            import { RootStackNavigation } from '@/navigator/one';
            import React from 'react';
            import { Button, Text, View } from 'react-native';
            import { connect, ConnectedProps } from 'react-redux';

            // dva ; 正在加载..:loading,loading.effects['home/asyncAdd'];
            const mapStateToProps= ({home, loading}: RootState) => ({ //state 改成 对象结构的方法 {home}
                num: home.num,
                loading: loading.effects['home/asyncAdd'], // 跟异步操作的 type 值是一样的
            });

            // connect 帮我们把 models 里定义的 state 映射到 这个页面来.
            const connector = connect(mapStateToProps);

            type ModelState = ConnectedProps<typeof connector>

            interface IProps extends ModelState {
                navigation: RootStackNavigation;
            };

            // type IProps = {
            //     navigation: RootStackNavigation;
            // };

            class Home extends React.Component<IProps> {
                onPress = () => {
                    const { navigation } = this.props;
                    navigation.navigate('Detail', {
                        id: 200,
                    });
                };

                // 加法 运算 方法.
                handleAdd = ()=> {
                    const {dispatch} = this.props;
                    dispatch({
                        type: 'home/add', // 这里是找到 dva.ts 里的 HomeModel 里的 add() 方法
                        payload: {        // 第二个参数
                            num: 10,      // 每次加 10
                        }
                    })
                }

                // 异步加:   点了之后,会过段时间处理,  中间等的时间长的话,可以提示下用户 "正在加载..."
                asyncAdd= () => {
                    const {dispatch} = this.props;
                    dispatch({
                        type: 'home/asyncAdd', // 这里是找到 dva.ts 里的 HomeModel 里的 add() 方法
                        payload: {        // 第二个参数
                            num: 3,      // 每次加 3
                        }
                    })
                }
                render() {
                    const {num,loading} = this.props;   // 从 dva home 里取 num
                    return (
                        <View style={{ flexDirection:"column", alignItems:"center",}}>
                            <Text style={{ margin: 50, fontSize:40}}>Home</Text>
                            <Text style={{ margin: 50, fontSize:20}}>--{loading ? '正在努力计算中:' : '' }{num}--</Text>
                            <Button title='加法' onPress={this.handleAdd} />
                            <Button title='异步加法' onPress={this. asyncAdd} />
                            <Button title="跳转到详情页1" onPress={this.onPress} />
                        </View>
                    );
                }
            }

            export default connector(Home);



   