import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {ListView, Carousel} from '@ant-design/react-native';
import NewsItem from '../../widget/NewsItem';
import {Toast} from '@ant-design/react-native/es';

export default class BasicListExample extends React.Component {
    state = {
        layout: 'list',
    };
    sleep = (time: any) =>
        new Promise(resolve => setTimeout(() => resolve(), time));
    onFetch = async (
        page = 1,
        startFetch,
        abortFetch,
    ) => {
        try {
            let pageLimit = 30;
            if (this.state.layout === 'grid') {
                pageLimit = 60;
            }
            const skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from(
                {length: pageLimit},
                (_, index) => `item -> ${index + skip}`,
            );

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 3) {
                rowData = [];
            }

            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(500);
            startFetch(rowData, pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
        }
    };

    renderItem = (item, index) => {
        if (index == 0) {
            return <Carousel
                style={styles.wrapper}
                selectedIndex={0}
                autoplay
                infinite
                afterChange={this.onHorizontalSelectedIndexChange}
            >
                <View
                    style={[styles.containerHorizontal]}>
                    <Image style={styles.imageCarousel}
                           source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571228002582&di=90659f76ba2b52f0e6654c9f679268cb&imgtype=jpg&src=http%3A%2F%2Fimg.cndesign.com%2Fupload%2Fnews%2F20190213%2F6368566825874171494667033.png'}}/>
                </View>
                <View
                    style={[styles.containerHorizontal]}>
                    <Image style={styles.imageCarousel}
                           source={{uri: 'http://www.sznews.com/photo/pic/2019-10/16/t2_(0X0X600X337)869a535e-b333-48bd-b97e-5881dba6fe8c.jpg'}}/>
                </View>
                <View
                    style={[styles.containerHorizontal]}>
                    <Image style={styles.imageCarousel}
                           source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571227974790&di=70ff2b30cfe3a6cd6533853bc82e48ea&imgtype=0&src=http%3A%2F%2Fwww.shirtlining.com.cn%2Ftpl%2Fyycb%2FPublic%2Fimages%2Fnews-pic.jpg'}}/>
                </View>
            </Carousel>;
        } else {
            return <NewsItem nav={this.props.nav}/>;
            //     < TouchableOpacity onPress={() => {
            //     //此处的组件未接入到路由，只有它的主容器Main Page接入，需要传递到这里来使用，也可以继续传递到下一个组件
            //     this.props.nav.navigate({routeName:'DETAIL', params:{url: 'http://www.baidu.com'}});
            // }
            // }>
            //     <NewsItem nav={this.props.nav}/>
            // </TouchableOpacity>;
        }
    };

    render() {
        return (
            <ListView
                style={{height: this.props.height}}
                onFetch={this.onFetch}
                keyExtractor={(item, index) =>
                    `${this.state.layout} - ${item} - ${index}`
                }
                renderItem={this.renderItem}
                numColumns={this.state.layout === 'list' ? 1 : 3}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        paddingLeft: 5,
        paddingRight: 5,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
    gridStyle: {
        height: 50,
        backgroundColor: 'orange',
    },
    gridItem: {
        backgroundColor: 'red',
        height: '100%',
    },
    imageCarousel: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    normalItemLay: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        flex: 5,
        // backgroundColor: 'blue',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    normalItemLay_img: {
        height: 90,
        borderRadius: 3,
        flex: 2,
    },
    normalItemLay_content: {
        flex: 3,
        height: 90,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    normalItemLay_text_title: {
        // backgroundColor: 'gray',
        fontSize: 14,
    }, normalItemLay_text: {
        // backgroundColor: 'yellow',
        fontSize: 12,
    },
    normalItemLay_text_right: {
        width: '100%',
        // backgroundColor: 'green',
        textAlign: 'right',
        fontSize: 10,
    },
});
