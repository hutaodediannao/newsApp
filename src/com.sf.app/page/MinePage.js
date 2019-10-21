import HeaderView from '../widget/Header.js';
import React from 'react';
import {Image, ScrollView, View, StyleSheet, Text, TouchableOpacity, ToastAndroid, AsyncStorage} from 'react-native';
import {List, Provider, Toast} from '@ant-design/react-native';
import DialogModal from '../dialog/TipsDialog.js';
import EditDialogModal from '../dialog/EditDialog';
import RNExitApp from 'react-native-exit-app';
import SexSelectDialogModal from "../dialog/SexSelectDialog";

const Item = List.Item;

//图片选择器
import ImagePicker from 'react-native-image-picker';
//图片选择器参数设置
const options = {
    title: '请选择图片来源',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '相册图片',
    customButtons: [
        {name: '胡涛', title: '胡涛自定义图片'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class Mine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDialog: false,
            isShowEditNickDialog: false,
            isShowSexDialog: false,
            nickName: '这个人很懒，未设置昵称',
            sex: 1,//0:表示女的，1：表示男的
            avatarSource: null,//拍照或者选择的图片
        };
    }

    componentDidMount(): void {
        //读取用户保存的数据用户信息（持久化读取）
        AsyncStorage.getItem('token', (error, result) => {
            this.setState({nickName: result})
        })
    }

    render() {
        return (
            <View style={styles.body}>
                <HeaderView centerContent={'我的'}
                            backgroundColor={'#218eff'}
                            textColor={'white'}
                            rightContent={'设置'}
                            isShowRightText={true}
                            rightClick={() => {
                                this.props.navigation.navigate('SETTING');
                            }}
                />
                <Provider>
                    <ScrollView
                        style={{flex: 1, backgroundColor: '#f5f5f9'}}
                        automaticallyAdjustContentInsets={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        <List>
                            <View style={styles.itemHeader}>
                                <View style={styles.center}>
                                    <TouchableOpacity onPress={() => {
                                        //点击头像选择图片或者拍照
                                        this.choosePic();
                                    }}>
                                        <Image
                                            source={this.state.avatarSource == null ? require('../../res/person.jpg') : this.state.avatarSource}
                                            style={styles.itemHeaerImg}/>
                                    </TouchableOpacity>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({
                                                isShowSexDialog: true
                                            })
                                        }}>
                                            {this.getIcon()}
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({isShowEditNickDialog: true});
                                        }}>
                                            <Text>{this.state.nickName}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}/>
                            <Item style={styles.item} disabled onPress={() => {
                                this.props.navigation.navigate('USERPROFILE');
                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/header.png')}/>
                                        <Text>个人资料</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {
                                //服务平台，点击进入webView页面
                                // this.props.navigation.push('WEB');
                                this.props.navigation.navigate({
                                    routeName: 'WEB',
                                    params: {url: 'http://www.baidu.com'}
                                });
                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/app.png')}/>
                                        <Text>服务平台</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {
                                this.props.navigation.navigate('SETTING');
                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/setting.png')}/>
                                        <Text>设置中心</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {


                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/update.png')}/>
                                        <Text>检测升级</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {


                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/share.png')}/>
                                        <Text>推荐分享</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {
                                this.props.navigation.navigate('ABOUT');
                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/about.png')}/>
                                        <Text>关于App</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                            <Item style={styles.item} disabled onPress={() => {
                                this.setState({
                                    isShowDialog: true,
                                });
                            }}>
                                <View style={styles.itemText}>
                                    <View style={styles.itemTextLay}>
                                        <Image style={styles.itemIcon} source={require('../../res/exit.png')}/>
                                        <Text>退出</Text>
                                    </View>
                                    <Image style={styles.itemIcon} source={require('../../res/go.png')}/>
                                </View>
                            </Item>
                        </List>

                        <DialogModal
                            content='确定退出吗？'
                            confirm={this.ensureDialog}
                            cancel={this.cancelDialog}
                            visible={this.state.isShowDialog}/>

                        <EditDialogModal
                            content='修改昵称'
                            confirm={this.updateNickName}
                            cancel={this.closeEditDialog}
                            visible={this.state.isShowEditNickDialog}/>

                        <SexSelectDialogModal
                            content='修改性别'
                            select={this.select}
                            cancelSexDialog={this.cancelSexDialog}
                            visible={this.state.isShowSexDialog}/>

                    </ScrollView>
                </Provider>
            </View>
        );
    }

    cancelSexDialog = () => {
        this.setState({isShowSexDialog: false});
    }

    select = (value) => {
        this.setState({
            sex: value,
            isShowSexDialog: false
        })
    };

    getIcon = () => {
        return this.state.sex == 1 ? <Image style={{width: 15, height: 15, marginRight: 2}}
                                            source={require('../../res/man.png')}/> :
            <Image style={{width: 15, height: 15, marginRight: 2}}
                   source={require('../../res/woman.png')}/>;
    }

    //取消修改
    closeEditDialog = () => {
        this.setState({isShowEditNickDialog: false});
    };

    //确认修改
    updateNickName = (editContent) => {
        AsyncStorage.setItem('token', editContent == '' ? '这个人很懒，未设置昵称' : editContent,
            (error, result) => {
                if (error == null) {
                    this.setState(
                        {
                            isShowEditNickDialog: false,
                            nickName: editContent == '' ? '这个人很懒，未设置昵称' : editContent,
                        },
                    );
                }
            });
    };

    // 确认
    ensureDialog = () => {
        this.setState({isShowDialog: false});
        RNExitApp.exitApp();
    };

    //取消
    cancelDialog = () => {
        this.setState({isShowDialog: false});
    };

    //选择照片按钮点击
    choosePic = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('用户取消了选择！');
            } else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            } else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            } else {
                let source = {uri: response.uri};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
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

export default Mine;
