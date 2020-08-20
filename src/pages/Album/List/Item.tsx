import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { IProgram } from '@/models/album';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



interface IProps {
    data: IProgram,
    index: number,
    onPress: ( data: IProgram) => void, // 定义入参
}

class Item extends React.Component<IProps> {

    onPress = () => {
        // 拿到父组件 传过来的 onPress
        const {onPress, data} = this.props;
        if(typeof onPress === 'function') {
            onPress(data);
        }
    }
    // state= { index:1}
    render() {
        const {data, index} = this.props;
        return (
            <Touchable onPress={this.onPress} style={styles.container}>
                <Text style={styles.index}>{index+1}</Text>
                <View  style={styles.middle}>
                    <Text style={styles.title}>{data.title}</Text>
                    <View style={styles.number}>
                        <IconFont name='icon-tingshu' color={'#666'} size={16} /><Text style={styles.gray}>{data.playVolume}</Text>
                        <IconFont name='icon-shijian' color={'#666'} size={18} /><Text style={styles.gray}>{data.duration}</Text>
                    </View>
                </View>
				
                <Text style={styles.date}>{data.date}</Text>
                
			</Touchable>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingVertical:16,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#ccc'
    },
    middle: {
        flexDirection:'column',
        flex: 1,
        marginLeft:25,
    },
    number:{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
    },
    date: {paddingHorizontal: 10,color:'#666'},
    index:{
        fontSize:16,
        fontWeight: '500',
        paddingHorizontal: 10,
        color:"#666"
    },
    title:{
        fontSize: 16,
        marginBottom:10,
        fontWeight:'500'
    },
    gray:{ color:'#666',marginLeft:4, marginRight: 20,},

})

export default Item;