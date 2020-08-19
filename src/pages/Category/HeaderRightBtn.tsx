/**
 * 编辑 / 完成 按钮
 * 3.右上角按钮: 编辑 
 */
import { RootState } from '@/models';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect, ConnectedProps } from 'react-redux';


// 13. 右上角按钮: 编辑 ; 再转到 HeaderRightBtn.tsx 我们要获取到 dva 中 编辑的状态.
const mapStateToProps = ({category}:RootState) => {
    return {
        isEdit: category.isEdit,
    }
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
    onSubmit: () => void; //  9. 右上角按钮: 编辑 ;定义这个接口
}

class HeaderRightBtn extends React.Component <IProps>{
    
    render() { 
        // 10. 右上角按钮: 编辑 ; 从 props 中拿到 onSubmit, 再传给下面 onPress;
        // 14. 右上角按钮: 编辑 ; 添加 isEdit
        const {onSubmit, isEdit} = this.props;
        console.log('=========',isEdit)
        return (
            // 这里不自己写按钮,,用个第三方的库(方便显示多个按钮,为了以后的扩展考虑). HeaderButtons包裹, 里面可以放很多按钮, Item 就是按钮
            <HeaderButtons> 
                <Item 
                    // 15. 右上角按钮: 编辑 ; 添加 isEdit 判断:如果是编辑状态,就显示完成, 如果不是,就是编辑.
                    title={isEdit ? '完成' : '编辑'} 
                    // 8.右上角按钮: 编辑 ;接下来是去 HeaderRightBtn.tsx 页面,给按钮添加点击事件,执行这个 action
                    onPress={onSubmit} // 11. 右上角按钮: 编辑 ; 不能写在这个组件里面,应该调用父组件穿过来的一个函数, 上面声明个接口. 转 Category -> index.tsx 定义 onSubmit
                />
            </HeaderButtons>
        )
    }
}

export default connector(HeaderRightBtn);// 16. 右上角按钮: 编辑 ;connector

// 4.右上角按钮: 编辑 ; 转到 models -> category.ts 定义编辑的状态: isEdit