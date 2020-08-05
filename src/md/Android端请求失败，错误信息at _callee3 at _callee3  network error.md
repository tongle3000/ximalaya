
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
##  uncaught at _callee3 at _callee3 at _callee7   at takeEvery   at _callee   at _callee 

##  network error  // 加了打印  console.log('error', error)
     
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

     (自己的开发环境: IMac 开发 raeact-native, 苹果和安卓端 App)


##  网上相关搜索问题
    uncaught at _callee3 at _callee3 at _callee7   at takeEvery   at _callee   at _callee 
    Android端请求失败，错误信息network error
    axios请求 报 network error

    
    
##  自己遇到的报错: 
    ERROR    uncaught at _callee3 at _callee3 
    at _callee7 
    at takeEvery 
    at _callee 
    at _callee 
    (有次，我 YApi 的服务没打开，苹果模拟器报的就是上面第一个问题。)
    
 #  加了打印  console.log('error', error) + 报的错:  Network Error
    error [Error: Network Error] 


##  自己的 想法 和 解决办法:
    想法: 
        首先这个是报网络问题, 安卓可能是读不到数据. 网上找了 N 多方法,都解决不了问题.整整浪费了 1 天多时间. 
    
    
    解决办法:
        后面我在 读取数据的 axios封装的http.ts文件里,加了打印error, 打印出来的错误是:Network Error. 更加确定是访问网络读不到数据的问题. 因为有次，我 YApi 的服务没打开，苹果模拟器报的就是上面第一个问题。 
        
        认真思考了下, 能不能到安卓模拟器 的浏览器 上访问下我 YApi服务端, 看能不能访问我那些数据. 结果访问不了 127.0.0.1:3001(.env API_URL=http:// 127.0.0.1:3001/), 所以 安卓访问不了, 苹果模拟器访问的了, 应该是因为我在苹果系统上开发的, 所以苹果模拟器 和 电脑 127.0.0.1, localhost 都是通的, 所以都能访问, 安卓不能.

        然后我在安卓模拟器上再试了下, 以本机的 ip 地址(192.168.31.55:3001), 去访问 3001 端口. 访问的结果是跟苹果系统的 127.0.0.1:3001 的访问结果是一样的.

        随后, 我就把.env 的 API_URL 设置成这样: API_URL=http://192.168.31.55:3001/, 再从新运行, yarn android, 能访问数据了. 问题完美解决.