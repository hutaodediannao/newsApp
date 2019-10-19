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

export default class SexSelectDialogModal extends Component {

    render() {
        return (
            <Modal style={styles.container}
                   transparent={true}
                   visible={this.props.visible}
                   onRequestClose={() => {
                       this.props.cancelSexDialog();
                   }}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {
                    this.props.cancelSexDialog();
                }}>
                    <View style={styles.dialogContainer}>
                        <View style={styles.innerContainer}>

                            <View style={styles.contentContainer}>
                                <Text style={styles.dialogContentTextStyle}>{this.props.content}</Text>
                            </View>

                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.dialogCancelButton}
                                                  onPress={() => this.props.select(1)}>
                                    <Text style={styles.hidemodalTxt}>男</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.dialogCancelButton}
                                                  onPress={() => this.props.select(0)}>
                                    <Text style={styles.hidemodalTxt}>女</Text>
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 270,
        height: 140
    },
    contentContainer: {
        width: 270,
        height: 40,
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
        width: 270,
        height: 45,
        borderTopWidth: 1,
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
        height: 40,
        width: '100%',
        borderRightColor: '#cccccc'
    },
    hidemodalTxt: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
        color: '#4fb7f1'
    },
});
