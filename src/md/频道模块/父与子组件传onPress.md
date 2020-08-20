##  父与子组件传 onPress
##  父组件
    onPress = (data: IProgram) => {
        alert('节目');
    }

    renderItem = ({item, index}:{item:IProgram, index:number}) => { // 这句跟下面这句功能相同
	// renderItem = ({ item, index }: ListRenderItemInfo<IProgram>) => {   //ListRenderItemInfo 不是 ListRenderItem(这个会找不到 item, index)

		return  <Item data = {item} index ={index} onPress={this.onPress} />
	};

##  子组件
    interface IProps {
        data: IProgram,
        index: number,
        onPress: ( data: IProgram) => void, // 定义入参
    }



    class Item extends React.Component<IProps> {

        onPress = () => {
            const {onPress, data} = this.props;  // 拿到父组件 传过来的 onPress 
            if(typeof onPress === 'function') {
                onPress(data);
            }
        }
        // state= { index:1}
        render() {
            const {data, index} = this.props;
            return (
                <Touchable onPress={this.onPress}>
                    <Text>{index+1}</Text>
                    <Text>{data.title}</Text>
                    ...
                </Touchable>
            )
        }
    }