import { RootStackNavigation } from '@/navigator';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import useURLLoader from './temp/useURLLoader';

type IProps = {
    navigation: RootStackNavigation;
};

const CatShowWithHook = () => {
    const [category, setCategory] = useState('1');
    const [data, loading] = useURLLoader(`https://api.thecatapi.com/v1/images/search?category_ids=${category}`)

    console.log(data,'aaa')

    return (
        <View style={{  alignItems:'center'}}>
            <Button 
                /* title={`${data[0].categories.name}`}*/
                title={  category === '1' ? '帽子' : category === '2' ? 'space 太空' : category === '3' ? 'funny' : category === '4' ? 'sunglasses 墨镜' : category === '5' ? '盒子' : 'caturday'
                    
                }

                
                
                onPress={()=> { category === '1' ? setCategory('2') : category === '2' ? setCategory('3') : category === '3' ? setCategory('4') : category === '4' ? setCategory('5') : category === '5' ? setCategory('6') : setCategory('1') }}
            />

            <Button title='帽子' onPress={()=> {setCategory('1')}}/>
            <Button title='盒子' onPress={()=> {setCategory('5')}} />
            <Text>图片地址:{data[0].url}</Text>
            {/* <Text>图片地址:{data[0].categorise[0].name}</Text> */}
            {loading ? <Text>🐈 猫猫数据读取中...</Text> : <Image source={{uri: data && data[0].url}} style={styles.image} /> }
            
        </View>
    )
}

const Account = (props: IProps) => {

    const { navigation } = props;
    
    const onPress = () => {
        navigation.navigate("Detail", {
            id: 100,
        });
    };
    return (

        <View>
            <Text>Account</Text>
            <CatShowWithHook />
            <Button title="跳转到详情页1" onPress={onPress} />
        </View>
    )
}
// class Account extends React.Component<IProps> {
//     onPress = () => {
//         const { navigation } = this.props;
//         navigation.navigate("Detail", {
//             id: 100,
//         });
//     };

//     render() {
//         return (
//             <View>
//                 <Text>Account</Text>
//                 <Button title="跳转到详情页1" onPress={this.onPress} />
//             </View>
//         );
//     }
// }

export default Account;

const styles = StyleSheet.create({
    image: { 
        width:300,
        height:300,
    }
})