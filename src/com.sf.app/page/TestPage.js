import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class Test extends React.Component {

    render() {
        return (<View>
            <Text>Hello world</Text>
            {/*<Text>{this.props.navigation.state.params.data}</Text>*/}
        </View>);
    }
}

const stackNavigator = createStackNavigator(
    {
        TEST: Test,
    },
    {
        initialRouteName: 'TEST',
        headerMode: 'none',
    },
);

export default createAppContainer(stackNavigator);
