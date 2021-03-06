/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import {Checkbox, List} from "@ant-design/react-native";

export const array = [];
export default class MuiltSelectModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            basketballCheckStatus: false,
            youYongCheckStatus: false,
            paShanCheckStatus: false,
            driverCheckStatus: false,
        };
    }

    render() {
        return (
            <Modal style={styles.container}
                   transparent={true}
                   visible={this.props.visible}
                   onRequestClose={() => {
                       this.props.cancel()
                   }}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {
                    this.props.cancel()
                }}>
                    <List style={styles.dialogContainer}>
                        <View style={styles.innerContainer}>

                            <TouchableOpacity style={styles.contentContainer}>
                                <View style={{width: 50}}/>
                                <Text style={styles.dialogContentTextStyle}>{this.props.content}</Text>
                                <TouchableOpacity onPress={() => {
                                    ToastAndroid.show(array.toString(), ToastAndroid.SHORT);
                                    this.props.cancel();
                                }}>
                                    <Text style={styles.selectItemStyle}>确定</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnContainerTitle}>
                                <View style={styles.selectItemText}>
                                    <View/>
                                    <Text>篮球</Text>
                                    <Checkbox
                                        checked={this.state.basketballCheckStatus}
                                        onChange={(OnChangeParams) => {
                                            let isCheck = OnChangeParams.target.checked;
                                            let p = array.includes('篮球');
                                            if (isCheck) {
                                                if (!p) array.push('篮球');
                                            } else {
                                                if (p) array.splice(array.findIndex(item => item == '篮球'), 1);
                                            }
                                            this.setState({
                                                basketballCheckStatus: isCheck
                                            })
                                        }}/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnContainer}>
                                <View style={styles.selectItemText}>
                                    <View/>
                                    <Text>游泳</Text>
                                    <Checkbox
                                        checked={this.state.youYongCheckStatus}
                                        onChange={(OnChangeParams) => {
                                            let isCheck = OnChangeParams.target.checked;
                                            let p = array.includes('游泳');
                                            if (isCheck) {
                                                if (!p) array.push('游泳');
                                            } else {
                                                if (p) array.splice(array.findIndex(item => item == '游泳'), 1);
                                            }
                                            this.setState({
                                                youYongCheckStatus: isCheck
                                            })
                                        }}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnContainer}>
                                <View style={styles.selectItemText}>
                                    <View/>
                                    <Text>爬山</Text>
                                    <Checkbox
                                        checked={this.state.paShanCheckStatus}
                                        onChange={(OnChangeParams) => {
                                            let isCheck = OnChangeParams.target.checked;
                                            let p = array.includes('爬山');
                                            if (isCheck) {
                                                if (!p) array.push('爬山');
                                            } else {
                                                if (p) array.splice(array.findIndex(item => item == '爬山'), 1);
                                            }
                                            this.setState({
                                                paShanCheckStatus: isCheck
                                            })
                                        }}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnContainer}>
                                <View style={styles.selectItemText}>
                                    <View/>
                                    <Text>开车</Text>
                                    <Checkbox
                                        checked={this.state.driverCheckStatus}
                                        onChange={(OnChangeParams) => {
                                            let isCheck = OnChangeParams.target.checked;
                                            let p = array.includes('开车');
                                            if (isCheck) {
                                                if (!p) array.push('开车');
                                            } else {
                                                if (p) array.splice(array.findIndex(item => item == '开车'), 1);
                                            }
                                            this.setState({
                                                driverCheckStatus: isCheck
                                            })
                                        }}/>
                                </View>
                            </TouchableOpacity>

                            <View style={{
                                height: 1,
                                backgroundColor: '#cccccc',
                                width: '100%'
                            }}/>

                        </View>
                    </List>
                </TouchableOpacity>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            // backgroundColor: 'white',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row'
        },
        dialogContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        selectItemStyle: {
            width: 50,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 5,
            marginRight: 10,
            marginLeft: 0,
            backgroundColor: '#218eff',
            color: 'white',
            textAlignVertical: 'center',
            textAlign: 'center',
        },
        selectItemText: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1
        },
        innerContainer: {
            borderRadius: 0,
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            height: 200
        },
        contentContainer: {
            width: '100%',
            height: 40,
            flexDirection: 'row',
            top: 0,
            borderTopColor: '#cccccc',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        dialogContentTextStyle: {
            fontSize: 17,
            color: '#333333',
        },
        btnContainerTitle: {
            width: '100%',
            height: 40,
            flexDirection: 'column',
            borderTopWidth: 1,
            borderTopColor: '#cccccc',
            alignItems: 'center',
            paddingLeft: 50,
            paddingRight: 50,
        },
        btnContainer: {
            width: '100%',
            height: 40,
            flexDirection: 'column',
            borderTopWidth: 1,
            borderTopColor: '#cccccc',
            alignItems: 'center',
            paddingLeft: 50,
            paddingRight: 50,
        },
        dialogConfirmButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
            borderLeftColor: '#cccccc',
            borderLeftWidth: 1
        },
        dialogCancelButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
            borderRightColor: '#cccccc'
        },
        hidemodalTxt: {
            marginTop: 5,
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 10,
            color: '#4fb7f1'
        },
    })
;
