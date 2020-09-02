import IconFont from '@/assets/iconfont';
import { RootStackNavigation } from '@/navigator';
import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';


type IProps = {
    navigation: RootStackNavigation;
};

class Listen extends React.Component<IProps> {
    state = {
		fadeAnim: new Animated.Value(0),
    };
    fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(this.state.fadeAnim, {
		  toValue: 1,
		  duration: 3000,
		  useNativeDriver: true
		}).start();
	};
	fadeOut = () => {
		// Will change fadeAnim value to 0 in 5 seconds
		Animated.timing(this.state.fadeAnim, {
		  toValue: 0,
		  duration: 3000,
		  useNativeDriver: true
		}).start();
	};
    
    
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {
            id: 100,
        });
    };

    render() {
        return (
            <View>
                <Text>Listen</Text>
                <Animated.View
						style={[
							styles.fadingContainer,
							{
								// styles.fadingContainer,
								opacity: this.state.fadeAnim,
								transform: [{
									// Y 轴 平移
									// translateY: this.state.fadeAnim
									// 	.interpolate({
									// 		inputRange: [0, 1],
									// 		outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0	
									// 	}),
									rotate: this.state.fadeAnim
											//	
										.interpolate({
											inputRange: [0, 1],
											outputRange: ['0deg', '360deg']
										}),
								}],
							}
						]}
					>
						<IconFont
							color={'red'}
							name="icon-shuaxin2"
							size={14}
						/>
					</Animated.View>
                    <Button title="Fade In" onPress={this.fadeIn} />
					<Button title="Fade Out" onPress={this.fadeOut} />
                <Button title="跳转到详情页1" onPress={this.onPress} />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    fadingContainer: {
        width: 50,
        height: 50,
        margin: 20,
        marginHorizontal: 200,
		padding:20,
		backgroundColor: "powderblue",
		
	},
})

export default Listen;
