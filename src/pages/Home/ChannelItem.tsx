import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import { IChannel } from '@/models/home';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface IProps {
    data: IChannel;
    // 3.加链接
    onPress: (data:IChannel) => void; // 它可以接收一个参数, data
}

// ChannelItem组件 主要功能,负责页面的渲染. 尽量别在这里面写 业务逻辑. 做到 业务 和 代码分离
class ChannelItem extends React.PureComponent<IProps> {

    // 2.加链接
    // 尽量别在 onPress 里写业务逻辑, 只需要调用父组件 传递过来的 onPress.
    // 所以 上面 Ipros 加入 onPress
    onPress = () => {
        // 4.加链接; 这里改后, 前面的 Home -> index.tsx 引用这个组件的地方 renderItem 就报错了,要修改.
        // 因为还要 传递一个 onPress 函数.
        const {onPress, data} = this.props;

        if(typeof onPress === 'function') {
            onPress(data);
        }
        
    }
	render() {
		const { data } = this.props;
		return (
            // 1.加链接 view 改成 Touchable 组件, 后面加上 onPress
			<Touchable style={styles.container} onPress={this.onPress}>
				<Image source={{ uri: data.image }} style={styles.image} />
				<View style={styles.centerContainer}>
                    <View style={styles.titleRemark}>
                        <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                        <Text style={styles.remark} numberOfLines={2}>{data.remark}</Text>
                    </View>
					
					<View style={styles.bottom}>
						<View style={styles.paly}>
							<IconFont name="icon-tingshu" size={14} />
							<Text style={styles.txt}>{data.played}</Text>
						</View>
						<View style={styles.paly}>
							<IconFont name="icon-touting" size={14} />
							<Text style={styles.txt}>{data.playing}</Text>
						</View>
					</View>
				</View>
                <View style={styles.rightContainer}>
                    <IconFont name='icon-more2' color={'#999'} size={20} />
                </View>
			</Touchable>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        margin:6,
        marginLeft:16,
        marginRight:16,
        padding:16,
        backgroundColor:'#fff',
        borderRadius: 8,
        justifyContent:"space-between",
        flex:1,
        // IOS 阴影效果
        shadowColor:'#ccc',
        shadowOffset: {width:0, height:5}, 
        shadowOpacity: 0.5,
        shadowRadius: 10,
        // 安卓端
        elevation:1, // 设置这个会改变 z-index 层级.

    },
    centerContainer:{ 
        flex:1,
        justifyContent:'space-between',
        // backgroundColor:'green',
    },
    rightContainer:{ 
        justifyContent:'flex-end',
        // backgroundColor:'yellow',
        
    },
    titleRemark: {
        alignItems:'flex-start',
    },
    title: {
        fontSize:16,
        fontWeight:'bold',
        lineHeight:20,
        marginBottom:5,
    },
    remark: {
        backgroundColor:'#efefef',
        padding:7,
        lineHeight:16,
        marginBottom:7,
    },
	image: {
		width: 100,
        height: 100,
        borderRadius:4,
        marginRight: 12,
    },
    bottom: {
        flexDirection:'row',
        // backgroundColor:'red',
        margin:0,
    },
    paly: {
        flexDirection:'row',
        alignItems: 'center',
        marginRight:20,
    },
    txt:{
        marginLeft:5
    },
});

export default ChannelItem;
