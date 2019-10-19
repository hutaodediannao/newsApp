import {View, Text, ToastAndroid, StyleSheet} from 'react-native';
import React from 'react';
import HeaderView from '../widget/Header';
import {WebView} from 'react-native-webview';

class WebViewServer extends React.Component {

    render() {
        return <View style={styles.body}>
            <HeaderView centerContent={'服务平台'}
                        backgroundColor={'#218eff'}
                        textColor={'white'}
                        isShowLeftIcon={true}
                        isShowRightText={false}
                        leftClick={() => {
                            this.props.navigation.goBack();
                        }
                        }/>
            <WebView
                loading={true}
                title={'测试'}
                canGoBack={true}
                canGoForward={true}
                startInLoadingState={true}
                source={{uri: 'https://baidu.com'}}
                style={{marginTop: 0}}
                javaScriptEnabled={true}
                scrollEnabled={false}
                domStorageEnabled={true}
                scalesPageToFit={true}
                startInLoadingState={true}
                allowUniversalAccessFromFileURLs={true}
                mediaPlaybackRequiresUserAction={false}
            /></View>;
    }

    componentDidMount(): void {
        ToastAndroid.show(this.props.navigation.state.params.url, ToastAndroid.SHORT);
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    },
    webViewStyle: {
        marginTop: 10,
    },
});

export default WebViewServer;
