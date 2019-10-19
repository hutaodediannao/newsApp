/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';


export default class DialogModal extends Component {

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
                    <View style={styles.dialogContainer}>
                        <View style={styles.innerContainer}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.dialogContentTextStyle}>{this.props.content}</Text>
                            </View>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.dialogCancelButton} onPress={() => {
                                    this.props.cancel()
                                }}>
                                    <Text style={styles.hidemodalTxt}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dialogConfirmButton} onPress={() => {
                                    this.props.confirm()
                                }}>
                                    <Text style={styles.hidemodalTxt}>确定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 270,
        height: 120
    },
    contentContainer: {
        flex: 1,
        width: 270,
        height: 75,
        flexDirection: 'row',
        position: "absolute",
        top: 0,
        borderTopColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogContentTextStyle: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 25,
        marginRight: 25
    },
    btnContainer: {
        flex: 1,
        width: 270,
        height: 45,
        flexDirection: 'row',
        borderTopWidth: 1,
        position: "absolute",
        bottom: 0,
        borderTopColor: '#cccccc',
        alignItems: 'center'
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
});
