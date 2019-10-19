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
    TextInput,
    ToastAndroid,
} from 'react-native';


export default class EditDialogModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editContent: '',
        };
    }

    render() {
        return (
            <Modal style={styles.container}
                   transparent={true}
                   visible={this.props.visible}
                   onRequestClose={() => {
                       this.props.cancel();
                   }}
            >
                {/*<TouchableOpacity style={{flex: 1}} onPress={() => {*/}
                {/*    this.props.cancel();*/}
                {/*}*/}
                {/*}>*/}

                    <View style={styles.dialogContainer}>
                        <View style={styles.innerContainer}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.dialogContentTextStyle}>{this.props.content}</Text>
                            </View>
                            <View style={{height: 0.5, top: 40, width: '100%', backgroundColor: '#cccccc'}}/>
                            <View style={styles.contentContainer2}>

                                <TextInput
                                    maxLength={30}
                                    ref="editNickInput"
                                    style={styles.editContent}
                                    placeholder={'请输入昵称:(10个字符以内)'}
                                    placeholderTextColor={'#cfcfcf'}
                                    value={this.state.editContent}
                                    onChangeText={text => this.onChangeText(text)}
                                />

                            </View>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.dialogCancelButton} onPress={() => {
                                    this.props.cancel();
                                }}>
                                    <Text style={styles.hidemodalTxt}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dialogConfirmButton}
                                                  onPress={() => {
                                                      this.props.confirm(this.state.editContent);
                                                      this.endEdit();
                                                  }}>
                                    <Text style={styles.hidemodalTxt}>确定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                {/*</TouchableOpacity>*/}
            </Modal>
        );
    }

    endEdit = () => {
        this.refs.editNickInput.blur();
    };

    onChangeText = (text) => {
        this.setState({editContent: text});
    };
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },

    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 270,
        height: 120,
    },
    contentContainer: {
        flex: 1,
        width: 270,
        height: 35,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        borderTopColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer2: {
        flex: 1,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        position: 'absolute',
        padding: 0,
        top: 35,
        borderTopColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContentTextStyle: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 25,
        marginRight: 25,
    },
    btnContainer: {
        flex: 1,
        width: 270,
        height: 45,
        flexDirection: 'row',
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0,
        borderTopColor: '#cccccc',
        alignItems: 'center',
    },
    dialogConfirmButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        borderLeftColor: '#cccccc',
        borderLeftWidth: 1,
    },
    dialogCancelButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        borderRightColor: '#cccccc',
    },
    hidemodalTxt: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
        color: '#4fb7f1',
    },
    editContent: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
