import Touchable from '@/components/Touchable';
import { RootState } from '@/models';
import { IAlbumModelState, IProgram } from '@/models/album';
import { RootStackParamList } from '@/navigator';
import { BlurView } from '@react-native-community/blur';
import { RouteProp } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import Tab from './Tab';


const mapStateToProps = ({album}:RootState) => {
    return{
        author: album.author,   // 作者
        summary: album.summary, // 摘要, 概要
        list: album.list,
    }
}

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
    headerHeight: number;
    route: RouteProp<RootStackParamList, 'Album'>;
}

class Album extends React.Component<IProps> {
    componentDidMount() {
        const {dispatch, route} = this.props;
        const {id} = route.params.item;
        dispatch({
            type:'album/fetchAlbum',
            payload: {
                id,
            }
        })

    }
    renderHeaer() {
        const {headerHeight, summary, author, route}=this.props;
        const {title, image}= route.params.item;
        return (

            <View style ={[styles.header, {paddingTop: headerHeight}]}>
                {/* 背景图片 */}
                <Image source={{uri: image}}  style={styles.background} />
                <BlurView blurType="light" blurAmount={5} style={StyleSheet.absoluteFillObject} />
                <View style={styles.leftView}>
                    <Image source={{uri:image}}  style={styles.thumnail} />
                    {/* <Image source={require('@/assets/001.png')}  style={styles.coverRight} />r */}
                </View>
                <View style={styles.rightView}>
                    <Text style={[styles.colorWhite, styles.title]}>{title}</Text>
                    <View style={styles.summary}>
                        <Text style={styles.colorWhite} numberOfLines={1}>{summary}</Text>
                    </View>
                    <View style={styles.author}>
                        <Image source={{uri:author.avatar}}  style={styles.avatar} />
                        <Text style={styles.colorWhite}>{author.name}</Text>
                    </View>
                </View>
            </View>
        )
    } 

    // keyExtractor = (item:IProgram) => {
    //     return item.id
    // }

    // renderItem = ({item}: {item:IProgram}) => {
    //     return(
    //         <Touchable>
    //             <Text>{item.id}</Text>
    //             <Text>{item.title}</Text>
    //             <Text>{item.date}</Text>
    //         </Touchable>
    //     )
    // }

    render() {
        const {headerHeight, summary, author, route,list}=this.props;
        const {title, image}= route.params.item;
        return (
            <View style={styles.container}>
                {this.renderHeaer()}
                <Tab />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        height:260,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    background:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'#999',
    },
    leftView:{
        marginRight:26,
    },
    thumnail:{
        width:98,
        height:98,
        borderColor:'#fff',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        backgroundColor:'#fff',
    },
    coverRight:{
        height: 98,
        position: 'absolute',
        right: -20,
        resizeMode: 'contain',
    },
    rightView:{
        flex: 1,
    },
    title:{
        fontSize: 18,
        fontWeight: '900',
    },
    summary:{ 
        backgroundColor:'rgba(0,0,0, .3)',
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
    },
    author:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar:{
        width: 26, height: 26, borderRadius:13,marginRight:8,
    },
    colorWhite:{
        color: '#fff',
    },
    list:{
        
    },
});

// useHeaderHeight 是个 hook 函数, 我们只能写个简单的高阶函数 包裹 Album 组件
function Wrapper(props: IProps) {
    const headerHeight = useHeaderHeight();
    return <Album {...props} headerHeight={headerHeight} /> // props 应该放在前面,后面是修改的; 不然报错,多次定义.
}


export default connector(Wrapper);