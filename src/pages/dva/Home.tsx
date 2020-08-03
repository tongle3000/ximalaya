import { RootState } from '@/models';
import { RootStackNavigation } from '@/navigator';
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
