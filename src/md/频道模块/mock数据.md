##  yapi
    频道模块
    接口名称: 频道接口 
    接口路径: /album/list
    提交

    编辑:
    请求参数设置 (设置 id 必填)
        id



    返回数据类型设置:
    模块
        status number 100
        msg   string success
        data  object  
            id         string  @guid
            title      string  @ctitle
            summary    string  @cparagraph               // 简介概括
            thumbnailUrl  string  @image('128x128')    // 缩略图
            author   object                             // 作者
                name   string  @cnameme
                avatar  srring @image('32x32', '@color','@color','@cname')   // 作者头像
            introduction  string   @cparagraph(2)      // 简介 生成 2 个段落
            list   array
                items   object
                    id    string  @guid
                    title string  @ctitle
                    playVolume  number   @integer(1000,10000)       // 播放量
                    duration    string  @time('HH:mm')              // 播放时长(取得是小时分钟,但表达的意思是,分钟秒.)
                    date        string   @date                      // 日期


            {
            "status": 100,
            "msg": "success",
            "data": {
                "id": "9EAF46BF-4c59-BCcf-421C-c18e9273cbC8",
                "title": "精头声王节",
                "summary": "图装是书广两难空精月图眼形在。基质外构易世规起五系新资社许加。方子质价精步去又华相究提主东对十取。门许把论且过起维叫据只发象产。",
                "thumbnailUrl": "http://dummyimage.com/128x128",
                "author": {
                "name": "@cnameme",
                "avatar": "http://dummyimage.com/32x32/9c79f2/79f279&text=夏超"
                },
                "introduction": "展织以为则龙拉见证色进因还。养片强结改其究组解人想决道养元白反过。",
                "list": [
                {
                    "id": "e7BfC0A3-3dbf-9B6E-9Ee9-dDA36c76Bc1f",
                    "title": "支流酸",
                    "playVolume": 1428,
                    "duration": "00:41",
                    "date": "1993-03-19"
                },
                {
                    "id": "f41ABcDd-f3d4-CC00-301B-F8EC1D6dBb4f",
                    "title": "史少科管阶三光",
                    "playVolume": 5135,
                    "duration": "12:28",
                    "date": "2019-07-22"
                },
                {
                    "id": "316c2B4d-D21C-88Df-FF58-db79D47B56bB",
                    "title": "这日至系利利",
                    "playVolume": 6114,
                    "duration": "03:09",
                    "date": "1986-10-01"
                }
                ]
            }
            }