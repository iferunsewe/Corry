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
        color: '#A7A9AC'
    },
    viewTripText: {
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E'
    }
});
