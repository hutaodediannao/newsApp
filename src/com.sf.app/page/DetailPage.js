import React from 'react';
import {View, Image, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderView from '../widget/Header';

export default class Detail extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderView centerContent={'新闻详情'}
                            backgroundColor={'#218eff'}
                            textColor={'white'}
                            isShowLeftIcon={true}
                            isShowRightText={false}
                            leftClick={() => this.props.navigation.goBack()
                            }/>
                <ScrollView style={{backgroundColor: '#F5F5F9'}}>
                    <Text style={{margin: 10, color: '#999'}}>朝鲜代表团着军装入境中国 参加军运会</Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('IMAGE');
                    }}>
                    <Image style={styles.imgIcon} source={{uri:'http://n.sinaimg.cn/news/1_img/upload/c4b46437/199/w639h360/20191017/6292-ifzxhxm5153069.jpg'}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:14, padding: 5}}>
                        <Text style={{fontSize:17, color:'red'}}>       2019年10月1日</Text>
                        珍惜前辈用鲜血凝成的友谊，欢迎朝鲜人民军来中国参加运动会，祝愿你们取得优异的成绩，为你们的祖国增光！
                    </Text>
                </ScrollView>
            </View>);
    }
}
const styles = StyleSheet.create({
    imgIcon:{
        width: '100%',
        height: 200,
    }
})
