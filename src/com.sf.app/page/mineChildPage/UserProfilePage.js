import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

import {List, Provider} from '@ant-design/react-native';
import HeaderView from '../../widget/Header';
import MyPicker from 'react-native-picker';
import MuiltSelectModal, {array} from "../../dialog/MuiltSelectDialog";
import DatePicker from "react-native-datepicker";

/**
 * 个人资料页面
 */
export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '这个家伙很懒，暂无昵称',
            sex: '男',
            birthday: '1990-12-01',
            city: '湖北省黄冈市',
            rank: 'A级',
            star: '处女座',
            date: '',
            love: '篮球、美女、电影、爬山',
            isShowLoveListDialog: false,
            isShowBirthdayDialog: false,
        };
    }

    render() {
        return (<View style={styles.body}>
            <HeaderView centerContent={'个人资料'}
                        backgroundColor={'#218eff'}
                        textColor={'white'}
                        isShowRightText={false}
                        isShowLeftIcon={true}
                        isShowRightText={true}
                        rightContent={'保存'}
                        leftClick={() => {
                            MyPicker.hide();
                            this.props.navigation.goBack()
                        }}
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
                                    <Text style={{color: 'gray'}}>{this.state.name}</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {
                            let data = [];
                            data.push('男');
                            data.push('女');
                            MyPicker.init(
                                {
                                    pickerData: data,
                                    selectedValue: [0, 1],
                                    pickerTitleText: '性别选择',
                                    pickerConfirmBtnText: '提交',
                                    pickerCancelBtnText: '取消',
                                    onPickerConfirm: data => {
                                        this.setState({sex: data})
                                    },
                                    onPickerCancel: data => {
                                        console.log(data);
                                    },
                                    onPickerSelect: data => {
                                        console.log(data);
                                    }
                                }
                            );
                            MyPicker.show();
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>性别</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>{this.state.sex}</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {
                            this.setState({
                                isShowBirthdayDialog: true
                            })
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>出生日期</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {/*<Text style={{color: 'gray'}}>{this.state.birthday}</Text>*/}
                                    <DatePicker
                                        style={{width:80}}
                                        date={this.state.date}
                                        mode="date"
                                        showIcon={false}
                                        placeholder="请选择日期"
                                        format="YYYY-MM-DD"
                                        minDate="1900-12-01"
                                        maxDate="2025-12-01"
                                        confirmBtnText="Confirm"
                                        // cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                marginLeft: 0,
                                                borderColor:'transparent'
                                            }
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => {
                                            this.setState({date: date})
                                        }}
                                    />

                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {
                            let data = [
                                {
                                    '湖北省': [{'黄冈市': ['蕲春县', '罗田县', '武穴市', '英山县']},
                                        {'武汉市': ['汉口', '武昌', '汉阳', '武义']},
                                        {'荆门市': ['东宝区', '掇刀区', '宝山区']}]
                                },
                                {
                                    '江西省': [{'九江市': ['修水县', '某某县1', '某某县2', '某某县3']},
                                        {'南昌市': ['赣州', '南江']},
                                        {'江南市': ['小小县1', '小小县2', '小小县3', '小小县4', '小小县5']}
                                    ]
                                },
                            ];
                            MyPicker.init(
                                {
                                    pickerData: data,
                                    selectedValue: [1],
                                    pickerTitleText: '级别选择',
                                    pickerConfirmBtnText: '提交',
                                    pickerCancelBtnText: '取消',
                                    pickerBg: [0, 10, 0, 0],
                                    onPickerConfirm: data => {
                                        this.setState({city: data})
                                    },
                                    onPickerCancel: data => {
                                        console.log(data);
                                    },
                                    onPickerSelect: data => {
                                        console.log(data);
                                    }
                                }
                            );
                            MyPicker.show();
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>地址</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>{this.state.city}</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {
                            let data = [];
                            data.push('A级');
                            data.push('B级');
                            data.push('C级');
                            data.push('D级');
                            MyPicker.init(
                                {
                                    pickerData: data,
                                    selectedValue: [1],
                                    pickerTitleText: '级别选择',
                                    pickerConfirmBtnText: '提交',
                                    pickerCancelBtnText: '取消',
                                    onPickerConfirm: data => {
                                        this.setState({rank: data})
                                    },
                                    onPickerCancel: data => {
                                        console.log(data);
                                    },
                                    onPickerSelect: data => {
                                        console.log(data);
                                    }
                                }
                            );
                            MyPicker.show();
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>级别</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>{this.state.rank}</Text>
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
                                    <Text style={{color: 'gray'}}>{this.state.star}</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>

                        <Item style={styles.item} disabled onPress={() => {
                            this.setState({
                                isShowLoveListDialog: !this.state.isShowLoveListDialog
                            });
                        }}>
                            <View style={styles.itemText}>
                                <View style={styles.itemTextLay}>
                                    <Text>爱好</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'gray'}}>{array}</Text>
                                    <Image style={styles.itemIcon} source={require('../../../res/go.png')}/>
                                </View>
                            </View>
                        </Item>
                    </List>
                </ScrollView>

                <MuiltSelectModal
                    content='选择爱好'
                    cancel={this.dimissSelectDialog}
                    confirm={this.confrimSelectArray}
                    visible={this.state.isShowLoveListDialog}/>

                {/*<DateSelectDialogModal*/}
                {/*    visible={this.state.isShowBirthdayDialog}/>*/}
            </Provider>
        </View>);
    }

    dimissSelectDialog = () => {
        this.setState({
            isShowLoveListDialog: false
        });
    }

    confrimSelectArray = (arrayValue) => {


    }
}

const Item = List.Item;

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
