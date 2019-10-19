import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ToastAndroid} from 'react-native';

export default class NewsItem extends React.Component {
    render() {
        return (<TouchableOpacity onPress={() => {
            //此处的组件未接入到路由，只有它的主容器Main Page接入，需要传递到这里来使用，也可以继续传递到下一个组件
            this.props.nav.navigate({routeName: 'DETAIL', params: {url: 'http://www.baidu.com'}});
        }
        }>
            <View style={styles.normalItemLay}>
                <Image style={styles.normalItemLay_img}
                       source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571227974787&di=1044a5919e0717d4c05346bd383dc1c3&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F060828381f30e92421b3d4fe49086e061c95f7ee.jpg'}}
                       style={styles.normalItemLay_img}/>
                <View style={styles.normalItemLay_content}>
                    <Text style={styles.normalItemLay_text_title}>国内新闻30分报道</Text>
                    <Text style={styles.normalItemLay_text}
                          numberOfLines={3}
                    >中华人民共和国成立70周年庆祝活动总结会议在京举行 习近平亲切会见庆祝活动筹办工作有关方面代表</Text>
                    <Text style={styles.normalItemLay_text_right}>2019-10-01</Text>
                </View>
            </View>
            <View style={{
                flex: 1, height: 1,
                backgroundColor: '#F0F8FF', marginLeft: 5, marginRight: 5,
                marginTop: 5,
            }}/>
        </TouchableOpacity>);
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
