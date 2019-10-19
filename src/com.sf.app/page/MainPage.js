import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {SegmentedControl} from '@ant-design/react-native';
import HeaderView from '../widget/Header';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HotFeedBackPage from './mainChildPage/HotFeedBack';
import MyFarovite from './mainChildPage/MyFarovite';
import MyFeedBack from './mainChildPage/MyFeedBack';

class BasicTagExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
        };
    }

    //进入该页面，表示登录成功了，给一个提示语给用户展示
    componentDidMount(): void {
        ToastAndroid.show('登录成功', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View>
                <HeaderView centerContent={'主页'}
                            backgroundColor={'#218eff'}
                            textColor={'white'}
                            isShowRightText={false}/>
                <SegmentedControl
                    style={styles.selectTab}
                    values={['热门发布', '我的收藏', '我的发布']}
                    onChange={(e) => {
                        this.setState({
                            pageIndex: e.nativeEvent.selectedSegmentIndex,
                        });
                    }}
                />
                {/*该方法切换页面需要每次都重新加载页面*/}
                {/*{this.onChange(this.state.pageIndex)}*/}
                {/*该方法可以防止每次切换都需要重新加载页面的问题*/}
                {/*传递当前页面的路由信息到下一层组件，使下一层组件能够跳转其他页面*/}
                <HotFeedBackPage height={this.state.pageIndex == 0 ? '100%' : 0} nav={this.props.navigation}/>
                <MyFarovite height={this.state.pageIndex == 1 ? '100%' : 0} nav={this.props.navigation}/>
                <MyFeedBack height={this.state.pageIndex == 2 ? '100%' : 0} nav={this.props.navigation}/>
            </View>
        );
    }

    onChange = (e) => {
        switch (e) {
            case 0:
                return <HotFeedBackPage/>;
            case 1:
                return <MyFarovite/>;
            case 2:
                return <MyFeedBack/>;
            default:
                return <HotFeedBackPage/>;
        }
    };
}

const styles = StyleSheet.create({
    selectTab: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
});

const stackNavigation = createStackNavigator(
    {
        HOT: HotFeedBackPage,
        MAIN: BasicTagExample,
    }, {
        headerMode: 'none',
        initialRouteName: 'MAIN',
    },
);

export default createAppContainer(stackNavigation);


