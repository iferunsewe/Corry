import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Moment from 'react-moment';

export default class ReviewSection extends Component{
    render() {
        return (
            <ListItem
                roundAvatar
                style={styles.container}
                hideChevron={true}
                avatar={this.props.avatarUrl}
                avatarStyle={styles.avatarStyle}
                subtitle={
                    <View style={styles.subtitleView}>
                        <View style={styles.flexStart}>
                            <Text style={styles.reviewTitle}>{this.props.reviewTitle}</Text>
                            <Text style={styles.text}>{this.props.rating}</Text>
                            <Moment
                                element={Text}
                                style={styles.tripDetails}
                                interval={0}
                                format="Do MMMM YYYY"
                            >
                                {this.props.date}
                            </Moment>
                            <Text style={styles.tripDetails}>Item: {this.props.item}</Text>
                        </View>
                        <View style={styles.flexEnd}>
                            <Text style={styles.review}>{this.props.review}</Text>
                        </View>
                    </View>
                }
            />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 6,
        flexDirection: 'row'
    },
    tripDetails: {
        fontSize: 12,
        color: '#A7A9AC',
        fontFamily: 'myriad-pro-regular'
    },
    subtitleView: {
        marginLeft: 20,
        flexDirection: 'row'
    },
    reviewTitle: {
        fontFamily: 'myriad-pro-regular'
    },
    flexStart: {
        alignItems: 'flex-start'
    },
    flexEnd: {
        alignItems: 'flex-end',
        marginLeft: 15,
        width: Dimensions.get('window').width / 2,
        paddingRight: 10
    },
    review: {
        fontFamily: 'myriad-pro-regular',
        fontSize: 12
    }
});
