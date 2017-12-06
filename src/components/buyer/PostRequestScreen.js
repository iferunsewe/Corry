import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput'

export default class PostRequestScreen extends Component{
    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Tell us what you want</Text>
                <StyledInput
                    title="name of product"
                    placeholder="name of product"
                />
                <StyledInput
                    title="where is from?"
                    placeholder="where is from?"
                />
                <StyledInput
                    title="how much is it?"
                    placeholder="how much is it?"
                />
                <Button title='make request' style={styles.button} onPress={() => Actions.chooseTraveller()}/>
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
    },
    text: {
        fontSize: 25,
        paddingBottom: 20
    },
    button: {
        width: 300,
        paddingTop: 30
    }
});
