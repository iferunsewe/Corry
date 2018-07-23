import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ErrorText extends Component {
    render() {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.error}>
                    {this.props.error || 'Something has gone wrong!'}
                </Text>
            </View>
        )
    }
}
const styles = {
    errorContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    error: {
        fontSize: 15,
        color: 'red',
        fontFamily: 'myriad-pro-regular'
    }
};