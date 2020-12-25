##  ScrollView 

    允许用户缩放内容:  放大 maximumZoomScale    缩小 minimumZoomScale

    设置maximumZoomScale和minimumZoomScale道具，您的用户将可以使用捏合和展开手势来放大和缩小。

##  FlatList
    适用于较长的数据列表
    唯一的方法是渲染  当前在屏幕上  显示的元素，而 不是 一次渲染所有元素。

    data: 是列表信息的来源。
    renderItem: 从源中获取一项并返回格式化的组件以进行渲染。

##  SectionList( 使用于 带有部分标题 , 类似于 UITableView iOS上的)
    比如 分类列表;

    sections: 列表数据来源;
    renderSectionHeader: 放分类标题;

    renderItem: 从源中获取一项并返回格式化的组件以进行渲染。

##  sudo lsof -i：8081
    运行以下命令以查找正在端口8081上侦听的进程的ID：
    

##  npx react-native start --port = 8088
    您可以使用以下port参数将捆绑程序配置为使用 8081 以外的端口, 比如 8088

##  text显示 2 行文字: numberOfLines={2} 
    <Text numberOfLines={2}>{item.title}</Text>

##  <Image source={{ uri: item.image }} style={styles.image} />

### Platform
    Android和iOS实现单独的可视组件

##  针对样式差别化设置: height: Platform.OS === 'ios' ? 200 : 100


    // 显示不同的背景色
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'green'
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
            })
        }
    })
##  引用不同的组件
    const Component = Platform.select({
        ios: () => require('ComponentIOS'),
        android: () => require('ComponentAndroid')
    })();

    <Component />;

    const Component = Platform.select({
        native: () => require('ComponentForNative'),
        default: () => require('ComponentForWeb')
    })();

    <Component />;
##  不同模块的 js 引用(定义 2 个不同的 js ,引用只用引用前缀名就可以了 )
    BigButton.ios.js
    BigButton.android.js

    import BigButton from './BigButton';

##  alita ( 把项目转换成小程序 )
    cd [项目名]

    执行alita转化命令

    alita 
    如果你需要边开发边看小程序效果可以添加--dev 参数，打开开发者模式：

    alita --dev
    这样，你在RN目录的wx-dist目录下就得到了一份小程序源代码

    微信开发者工具从wx-dist目录导入项目


##  npm install -g react-devtools
    在react-devtools从终端运行以启动独立的DevTools应用程序
    react-devtools

    不全局 安装: 则可以将其添加react-devtools为项目依赖项
    npm install --save-dev react-devtools
    
    然后添加"react-devtools": "react-devtools"到中的scripts部分package.json，然后npm run react-devtools从项目文件夹中运行以打开DevTools。