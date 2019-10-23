import {View, Text, ToastAndroid, Button, StyleSheet, TextInput, AsyncStorage, Image} from 'react-native';
import React from 'react';
import HeaderView from '../widget/Header';
import {createAppContainer, NavigationActions, StackActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RootPageStack from './RootPage';
import {ActivityIndicator,} from '@ant-design/react-native';
import WebViewServer from './WebViewServerPage';
import Detail from './DetailPage';
import ImagePage from './ImageBrowserPage';
import Setting from './mineChildPage/AppSettingPage';
import AboutApp from './mineChildPage/AboutPage';
import UserProfile from "./mineChildPage/UserProfilePage";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            pageId: '001',
            isShowLoading: false,
        };
    }

    render() {
        return (<View style={styles.body}>
            <HeaderView
                style={styles.title}
                isShowLeftIcon={false}//是否显示左边内容
                isShowRightText={false}//是否显示右边内容
                centerContent={'登录'}//中间内容
                rightContent={''}//右边内容
                leftClick={
                    () => ToastAndroid.show('left', ToastAndroid.SHORT)
                }//左边监听
                rightClick={
                    () => ToastAndroid.show('right', ToastAndroid.SHORT)
                }//右边监听
                textColor={'white'}//文字颜色
                backgroundColor={'#218eff'}//背景颜色
            />
            {
                this.state.isShowLoading == false ? <View style={styles.loginContainer}>
                    <Image style={styles.logoStyle} source={require('../../res/app_icon.png')}/>
                        <View style={styles.loginLay}>
                            <Text style={styles.text}>用户名:</Text>
                            <TextInput style={styles.userName}
                                       onChangeText={(text) => {
                                           this.setState({
                                               userName: text,
                                           });
                                       }}/>
                        </View>
                        <View style={styles.loginLay}>
                            <Text style={styles.text}>密 码:</Text>
                            <TextInput style={styles.userName}
                                       onChangeText={(text) => {
                                           this.setState({
                                               password: text,
                                           });
                                       }}/>
                        </View>
                        <View style={styles.loginBtn}>
                            <Button title={'登录'} onPress={
                                () => {
                                    if (this.state.userName == '') {
                                        ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
                                    } else if (this.state.password == '') {
                                        ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
                                    } else {
                                        this.setState({
                                            isShowLoading: true,
                                        });

                                        // 存储用户信息到本地
                                        AsyncStorage.setItem(
                                            'token',
                                            this.state.userName
                                        );

                                        //模拟延时跳转页面到主页
                                        setTimeout(() => {
                                            //此处需要重置页面任务栈，将主页加入到任务栈中最底层
                                            const resetAction = StackActions.reset({
                                                index: 0,
                                                actions: [
                                                    NavigationActions.navigate(
                                                        {
                                                            routeName: 'ROOT',
                                                            params: {
                                                                userName: this.state.userName,
                                                                password: this.state.password,
                                                            },
                                                            key: this.state.pageId,
                                                        },
                                                    ),
                                                ],
                                            });
                                            this.props.navigation.dispatch(resetAction);
                                        }, 1000);
                                    }
                                }
                            }/>
                        </View>
                    </View> :
                    <View style={styles.loadingLay}>
                        <ActivityIndicator size={'large'} text="正在登录..."/>
                    </View>
            }
        </View>);
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
    },
    body: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    loginContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoStyle: {
        width: 50,
        height: 50,
        marginBottom: 50,
    },
    loadingLay: {
        justifyContent: 'center',
        flex: 1,
    },
    loginLay: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
        height: 40,
    },
    text: {
        width: '20%',
    },
    userName: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
        borderRadius: 3,
        paddingLeft: 10,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 0,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    loginBtn: {
        width: '75%',
        height: 40,
    },
});

const navigationStack = createStackNavigator(
    {
        LOGIN: Login,
        ROOT: RootPageStack,
        WEB: WebViewServer,
        DETAIL: Detail,
        IMAGE: ImagePage,
        SETTING: Setting,
        ABOUT: AboutApp,
        USERPROFILE: UserProfile,
    },
    {
        initialRouteName: 'LOGIN',
        headerMode: 'none',
        mode: 'card',
    },
);

export default createAppContainer(navigationStack);
