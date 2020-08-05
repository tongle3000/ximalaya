import { RootState } from '@/models';
import { RootStackNavigation } from '@/navigator';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import Carousel from './Carousel';
import Guess from './Guess';

// dva ; 正在加载..:loading,loading.effects['home/asyncAdd'];
const mapStateToProps= ({home, loading}: RootState) => ({ //state 改成 对象结构的方法 {home}
    carousels: home.carousels, // ⑩① 加入动态数据 yapi;
    loading: loading.effects['home/fetchCarousels'], // 跟异步操作的 type 值是一样的
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

    // ⑩ 加入动态数据 yapi;
    componentDidMount( ) {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/fetchCarousels', // fetchCarousels 是 models -> home.ts 里定义的 action
        });
    }


    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {
            id: 200,
        });
    };

    render() {
        const {carousels} = this.props;   // 从 dva home 里取 num
        return (
            <View>
                {/* // ⑩② 加入动态数据 yapi; 把数据传入下面这个组件里, 再到 Carousel.tsx 里定义一个接口, IProps */}
                <Carousel data = { carousels } />
                <Guess  />
                <Button title="跳转到详情页2" onPress={this.onPress} />
                
            </View>
        );
    }
}

export default connector(Home);
