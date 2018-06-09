import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';
import { Button } from 'react-native-elements';
import { loginUser } from '../../actions/index';

const ACCESS_TOKEN = 'access_token';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    async storeToken(accessToken){
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
            this.getToken();
        } catch(error) {
            console.log("Something went wrong: " + error)
        }
    }

    async getToken(){
        try {
            var token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is: " + token)
        } catch(error) {
            console.log("Something went wrong: " + error)
        }
    }

    async removeToken(){
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            this.getToken()
        } catch(error) {
            console.log("Something went wrong: " + error)
        }
    }

    onLoginPressed(){
        loginUser({
            email: this.state.email,
            password: this.state.password
        }).then(responseData => {
            this.storeToken(responseData["access_token"]);
            Actions.decision()
        }).catch(error => {
            console.log(error);
            error.json().then(error => {
                this.setState({error: error["message"]});
                this.removeToken();
            })
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.loginDetailsContainer}>
                    <StyledInput
                        title="email"
                        placeholder="email"
                        onChangeText={(val) => this.setState({email: val})}
                        value={this.state.email}
                    />
                    <StyledInput
                        title="password"
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(val) => this.setState({password: val})}
                        value={this.state.passwordConfirmation}
                    />
                    <Button title='login'
                            style={styles.button}
                            onPress={() => this.onLoginPressed()}
                            containerViewStyle={styles.buttonContainer}
                            fontFamily="myriad-pro-regular"
                            backgroundColor="#EEBE2E"
                            color="#231F20"
                    />
                </View>
                <View style={styles.errorContainer}>
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                </View>
            </View>
        )
    }

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        width: Dimensions.get('window').width / 1.25,
        paddingTop: 30
    },
    text: {
        fontSize: 20,
        paddingBottom: 20,
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E',
        marginLeft: 20
    },
    loginDetailsContainer:{
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        marginTop: 80
    },
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
