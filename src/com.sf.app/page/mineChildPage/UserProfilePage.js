import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

import {List, Provider, Toast} from '@ant-design/react-native';
import HeaderView from '../../widget/Header';

const Item = List.Item;

/**
 * 个人资料页面
 */
export default class UserProfile extends React.Component {

    render() {
        return (<View style={styles.body}>
            <HeaderView centerContent={'个人资料'}
                        backgroundColor={'#218eff'}
                        textColor={'white'}
                        isShowRightText={false}
                        isShowLeftIcon={true}
                        isShowRightText={true}
                        rightContent={'保存'}
                        leftClick={() => this.props.navigation.goBack()}
                        rightClick={() => {


                        }}
            />
            <Provider>
                <ScrollView
                    style={{flex: 1, backgroundColor: '#f5f5f9'}}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <List>
                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>姓名</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>胡涛</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>性别</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>男</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>出生日期</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>1988-12-25</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>地址</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>湖北省黄冈市</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>级别</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>A级</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>星座</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>处女座</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>爱好</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>篮球、书法、代码</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                    </List>
                </ScrollView>
            </Provider>
        </View>);
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
    },
    itemHeader: {
        height: 100,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f9',
    },
    itemHeaerImg: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 40,
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
    },
    item: {
        marginRight: -15,
        marginLeft: -5,
    },
    itemText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemTextLay: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#DCDCDC',
    },
});
