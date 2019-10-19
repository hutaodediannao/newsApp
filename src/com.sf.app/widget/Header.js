import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

class HeaderView extends React.Component {
    render() {
        return (<View style={this.styles.title}>
            <TouchableOpacity onPress={this.props.leftClick} style={this.styles.leftLay}>
                {this.props.isShowLeftIcon ?
                    <Image source={require('../../res/back_icon.png')} style={this.styles.leftImage}/> : null}
            </TouchableOpacity>
            <Text ref={'centerView'} style={this.styles.text}>{this.props.centerContent}</Text>
            <TouchableOpacity onPress={this.props.rightClick}  style={this.styles.rightLay}>
                {
                    this.props.isShowRightText ?
                        <Text ref={'rightView'} style={this.styles.text}>{this.props.rightContent}</Text> : null
                }
            </TouchableOpacity>
        </View>);
    }

    styles = StyleSheet.create({
        leftLay:{
            width: 100,
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        rightLay:{
            width: 100,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        title: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: this.props.backgroundColor?this.props.backgroundColor:'white',
            paddingLeft: 10,
            paddingRight: 10,
            height: 40,
        },
        leftImage: {
            width: 17,
            height: 17,
        },
        text: {
            color: this.props.textColor?this.props.textColor:'black',
            fontSize: 17,
        },
    });
}



export default HeaderView;
