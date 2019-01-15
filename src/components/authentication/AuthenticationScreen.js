import React, {Component} from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Button as NativeButton } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Login  from './LoginScreen'

export default class AuthenticationScreen extends Component {
    constructor() {
        super();
        this.state = {
            showLoginInput: false
        };
    }

    toggleLoginInput() {
        this.setState({
            showLoginInput: !this.state.showLoginInput
        });
    }

    renderLogin(){
        if(this.state.showLoginInput){
            return (
                <View>
                    <Login />
                    <NativeButton title="cancel"
                                  onPress={() => this.toggleLoginInput()}
                                  color="#999999"
                                  style={styles.cancel}
                    />
                </View>
            );
        } else {
            return null;
        }
    }

    renderAuthButtons(){
        if(!this.state.showLoginInput){
            return (
                <View style={styles.container}>
                    <Button title='login' style={styles.button} onPress={() => this.toggleLoginInput()}/>
                    <Button title='sign up' style={styles.button}/>
                    <SocialIcon
                        title='login with facebook'
                        button
                        type='facebook'
                        style={styles.socialButton}
                    />
                </View>
            )
        } else {
            return null;
        }
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderAuthButtons()}
                {this.renderLogin()}
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
    button: {
        width: 300,
        padding: 10
    },
    socialButton:{
        borderRadius: 0,
        width: 280
    },
    cancel: {
        paddingTop: 10
    }

});
