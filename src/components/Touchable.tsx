/**
 * Touchable
 * TouchableOpacity  activeOpacity 默认值 小于 {0.8},透明度太低, 按下的 item 颜色太重. 这里值改成 0.8 就透明度高一点,只有一点.
 */
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


// 优化; React.memo() 包 
const Touchable: React.FC<TouchableOpacityProps> = React.memo(props => (
	<TouchableOpacity activeOpacity={0.8} {...props} />
));

export default Touchable;


// // 原
// import React from 'react';
// import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

// const Touchable: React.FC<TouchableOpacityProps> = props => (
// 	<TouchableOpacity activeOpacity={0.8} {...props} />
// );

// export default Touchable;
