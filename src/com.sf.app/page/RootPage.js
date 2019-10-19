import {Image, StyleSheet, ToastAndroid} from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from './MainPage';
import Mine from './MinePage';
// import Test from './TestPage';

const mainStackNavagator = createStackNavigator(
    {
        MAIN: Main,
    },
    {
        headerMode: 'none',
        initialRouteName: 'MAIN',
    },
);

const mineStackNavagator = createStackNavigator(
    {
        MINE: Mine,
    },
    {
        headerMode: 'none',
        initialRouteName: 'MINE',
    });

const bottomTabNavigator = createBottomTabNavigator(
    {
        // TEST: Test,
        MAIN_STACK: {
            screen: mainStackNavagator,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '主页',
                tabBarOnPress: () => {
                    // route(navigation);
                    navigation.navigate(
                        {
                            routeName: 'MAIN',
                            params: {
                                userName: 'memeda',
                            },
                        });
                },
            }),
        },
        MINE_STACK: {
            screen: mineStackNavagator,
            navigationOptions: {
                tabBarLabel: '我的',
            },
        },
    },
    {
        initialRouteName: 'MAIN_STACK',
        headerMode: 'none',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'MAIN_STACK') {
                    return focused ? <Image source={require('../../res/home.png')} style={styles.iconStyle}/> :
                        <Image source={require('../../res/home_gray.png')} style={styles.iconStyle}/>;
                } else if (routeName === 'MINE_STACK') {
                    return focused ? <Image source={require('../../res/wode.png')} style={styles.iconStyle}/> :
                        <Image source={require('../../res/wode_gray.png')} style={styles.iconStyle}/>;
                }
            },
        }),

        tabBarOptions: {
            activeTintColor: '#218eff',
            inactiveTintColor: 'gray',
        },
    },
);

const styles = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20,
    },
});
export default createAppContainer(bottomTabNavigator);
