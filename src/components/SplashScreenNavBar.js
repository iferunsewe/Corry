import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Platform
} from 'react-native'

export default class SplashScreenNavBar extends Component {

    render(){
        return(
            <View style={styles.container} />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: (Platform.OS === 'ios') ? 84 : 74,
        backgroundColor: '#EEBE2E'
    }
});