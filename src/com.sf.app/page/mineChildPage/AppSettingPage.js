import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

import {List, Provider, Toast} from '@ant-design/react-native';
import HeaderView from '../../widget/Header';
const Item = List.Item;

/**
 * App设置升级页面
 */
export default class Setting extends React.Component {

    render() {
        return (<View style={styles.body}>
            <HeaderView centerContent={'设置'}
                        backgroundColor={'#218eff'}
                        textColor={'white'}
                        isShowRightText={false}
                        isShowLeftIcon={true}
                        leftClick={() => this.props.navigation.goBack()}
            />
            <Provider>
                <ScrollView
                    style={{flex: 1, backgroundColor: '#f5f5f9'}}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <List>
                        <View style={styles.line}/>
                        <Item style={styles.item} disabled onPress={() => {


                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Image style={styles.itemIcon} source={require('../../../res/app_version.png')}/>
                                    <Text>版本信息</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>V-1.0.1</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>
                        <Item style={styles.item} disabled onPress={() => {
                            Toast.show('ok', Toast.SHORT);
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Image style={styles.itemIcon} source={require('../../../res/cache_memory.png')}/>
                                    <Text>缓存大小</Text>
                                </View>
                                <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
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
