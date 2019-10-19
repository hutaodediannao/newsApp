import React from 'react';
import {Image, Text, View} from 'react-native';
import HeaderView from '../../widget/Header';

export default class AboutApp extends React.Component {
    render() {
        return (<View style={{alignItems: 'center', flex: 1}}>
            <HeaderView centerContent={'关于'}
                        backgroundColor={'#218eff'}
                        textColor={'white'}
                        isShowLeftIcon={true}
                        isShowRightText={false}
                        leftClick={() => {
                            this.props.navigation.goBack();
                        }
                        }/>

            <View style={
                {
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 30,
                }
            }>
                <View style={{alignItems: 'center',}}>
                    <Image style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                        marginTop: 50,
                    }}
                           source={require('../../../res/app_icon.png')}
                    />
                    <Text style={{fontSize: 14, color: 'gray', marginTop: 10}}>莫须有科技有限公司</Text>
                </View>
                <Text style={{fontSize: 14, color: 'red'}}>@Core by HuTao 2019-10-17</Text>
            </View>

        </View>);
    }
}
