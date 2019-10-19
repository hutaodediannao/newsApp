import React from 'react';
import {StyleSheet} from 'react-native';
import {ListView} from '@ant-design/react-native';
import NewsItem from '../../widget/NewsItem';

export default class MyFarovitePage extends React.Component {
    state = {
        layout: 'list',
    };
    sleep = (time: any) =>
        new Promise(resolve => setTimeout(() => resolve(), time));
    onFetch = async (
        page = 1,
        startFetch,
        abortFetch,
    ) => {
        try {
            let pageLimit = 30;
            if (this.state.layout === 'grid') {
                pageLimit = 60;
            }
            const skip = (page - 1) * pageLimit;
            let rowData = Array.from(
                {length: pageLimit},
                (_, index) => `item -> ${index + skip}`,
            );
            if (page === 3) {
                rowData = [];
            }
            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(200);
            startFetch(rowData, pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
        }
    };

    renderItem = (item, index) => {
            return <NewsItem nav={this.props.nav}/>;
    };

    render() {
        return (
            <ListView
                style={{height: this.props.height}}
                onFetch={this.onFetch}
                keyExtractor={(item, index) =>
                    `${this.state.layout} - ${item} - ${index}`
                }
                renderItem={this.renderItem}
                numColumns={this.state.layout === 'list' ? 1 : 3}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        paddingLeft: 5,
        paddingRight: 5,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
    gridStyle: {
        height: 50,
        backgroundColor: 'orange',
    },
    gridItem: {
        backgroundColor: 'red',
        height: '100%',
    },
    imageCarousel: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    normalItemLay: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        flex: 5,
        // backgroundColor: 'blue',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    normalItemLay_img:{
        height: 90,
        borderRadius: 3,
        flex: 2,
    },
    normalItemLay_content: {
        flex: 3,
        height: 90,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    normalItemLay_text_title:{
        // backgroundColor: 'gray',
        fontSize: 14,
    },normalItemLay_text:{
        // backgroundColor: 'yellow',
        fontSize: 12,
    },
    normalItemLay_text_right:{
        width: '100%',
        // backgroundColor: 'green',
        textAlign: 'right',
        fontSize: 10,
    }
});

