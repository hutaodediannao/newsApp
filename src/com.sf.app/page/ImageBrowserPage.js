import {View, Text, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import HeaderView from '../widget/Header';

const {width, height} = Dimensions.get('window');

const images = [
    {
        url: 'http://n.sinaimg.cn/tj/crawl/73/w500h373/20191017/2bbe-ifzxhxm6168836.jpg',
    },
    {
        url: 'http://n.sinaimg.cn/tj/crawl/73/w500h373/20191017/e121-ifzxhxm6168941.jpg',
    },
    {
        url: 'http://n.sinaimg.cn/tj/crawl/73/w500h373/20191017/9bad-ifzxhxm6169371.jpg',
    },
];

export default class ImagePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderView centerContent={'图片浏览'}
                            backgroundColor={'#218eff'}
                            textColor={'white'}
                            isShowLeftIcon={true}
                            isShowRightText={false}
                            leftClick={() => this.props.navigation.goBack()
                            }/>
                    <ImageViewer
                        imageUrls={images}
                        failImageSource={{
                            url: 'http://pic.51yuansu.com/pic3/cover/01/28/55/592368a469aca_610.jpg',
                            width: width,
                            height: height,
                        }}
                    />
            </View>
        );
    }
}

