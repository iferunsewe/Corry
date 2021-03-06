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
import ErrorText from '../helpers/ErrorText'

const ACCESS_TOKEN = 'access_token';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            errorPresent: false
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
            this.setState({error: '', errorPresent: false});
            this.storeToken(responseData["access_token"]);
            Actions.launchDecision()
        }).catch(error => {
            console.log(error);
            error.json().then(error => {
                this.setState({error: error["message"], errorPresent: true});
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
                            borderRadius={5}
                    />
                    <Text style={styles.registerLink}
                          onPress={() => Actions.registration()}>
                        new to us? register here
                    </Text>
                </View>
                <ErrorText error={this.state.error} errorPresent={this.state.errorPresent}/>
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
    registerLink:{
        marginTop: 15,
        color: '#EEBE2E',
        fontFamily: 'myriad-pro-regular',
        fontSize: 14
    }
};
