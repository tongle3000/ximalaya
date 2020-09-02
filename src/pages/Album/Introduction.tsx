import { RootState } from '@/models';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';


// 都写好的,,没错,但是读不到数据,,   connector 包裹组件 没做.
const mapStateToProps = ({album}: RootState) => {
    return {
        introduction: album.introduction,
    }
}

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Introduction extends React.Component<ModelState> {
    
    render() {
        const {introduction} = this.props;
        // console.log('........',introduction);
        return(
            <View style={styles.container}><Text style={styles.content}>{introduction}</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    content: {
        lineHeight: 24,
        color:'#333',
        fontSize: 14,
    },
});

export default connector(Introduction);