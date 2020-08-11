import { RootStackNavigation, RootStackParamList } from '@/navigator';
import { hp, viewportWidth, wp } from '@/utils';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const sideWidth = wp(100); 
const sideHeight = hp(84);

interface IProps {
    route: RouteProp<RootStackParamList, 'Detail'>;
    navigation: RootStackNavigation;
}

class Detail extends React.Component<IProps> {
// class Detail extends React.Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('BottomTabs', { screen: 'Found' });
        // navigation.navigate('Found');
    };
    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }
    render() {
        const { route } = this.props;

        // let imageResource = require('./src/assets/001.png');
//Image.resolveAssetSource(source);


        return (
            <View style={{/*paddingTop:getStatusBarHeight(),*/ flexDirection:'column',flex:1}}>
                <View style={{flex:1,}}><Image style={{flex:1, width:sideWidth,height:sideHeight}} source={require('@/assets/001.png')} /></View>
                <View>
                    <Text>{route.params.id}</Text>
                    <Button title="go to Found" onPress={this.onPress} />
                    <Button title="goBack" onPress={this.goBack} />
                </View>
                
            </View>
        );
    }
}

export default Detail;
