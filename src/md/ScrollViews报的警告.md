##   WARN     VirtualizedLists should never be nested inside plain ScrollViews with the same    orientation - use another VirtualizedList-backed container instead. 

    是因为 ScrollView 不能包 FlatList, 所以报上面的警告. 但是 FlatList 默认是带 Scroll 的.

        <ScrollView>
                    {/* // ⑩② 加入动态数据 yapi; 把数据传入下面这个组件里, 再到 Carousel.tsx 里定义一个接口, IProps */}
                <Carousel data = { carousels } />
                <Guess  />
                    {/* // 9 首页列表 */}

                <FlatList data={channels} renderItem={this.renderItem} />

                <Button title="跳转到详情页2" onPress={this.onPress} />
                
        </ScrollView>

这上面这块代码改为:  (  ListHeaderComponent={} ) 


    /**
     * 下面注释的 render 块 改成下面的.
     * ListHeaderComponent={} 能接收函数,也能 class, 还可以是 组件
     */

    // 这个 header 我们下面调用它的时候, 是真正调用的是 header 函数
    // 在 header中返回一个 View, 里面直接插入 2 个组件,轮播图,和 猜你喜欢.
    
    get header() {
        const {carousels} = this.props;
        return (
            <View>
                {/* // ⑩② 加入动态数据 yapi; 把数据传入下面这个组件里, 再到 Carousel.tsx 里定义一个接口, IProps */}
                <Carousel data = { carousels } />
                <Guess  />
                <Button title="跳转到详情页2" onPress={this.onPress} />
            </View>
        )
    }

    render() {
        const {channels} = this.props;   // 从 dva home 里取 num
        return (// 9 首页列表 
            <FlatList ListHeaderComponent={this.header} data={channels} renderItem={this.renderItem} />
        );
    }