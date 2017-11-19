import React, {Component} from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class AuthenticationScreen extends Component {


    render(){
        return(
            <View style={styles.container}>
                <Button title='Login' />
                <Button title='Registration' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
