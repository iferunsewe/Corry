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
import StyledInput from '../helpers/StyledInput'
import { Button } from 'react-native-elements'
import { registerUser } from '../../actions/index';
import ErrorText from '../helpers/ErrorText'

const ACCESS_TOKEN = 'access_token';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: '',
            errorPresent: false
        }
    }

    onRegisterPressed(){
        registerUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation,
            location_id: 1
        }).then(responseData => {
            this.setState({error: '', errorPresent: false});
            this.storeToken(responseData["access_token"]);
        }).catch(error => {
            console.log(error);
            error.json().then(error => {
                this.setState({error: error["message"], errorPresent: true});
                this.removeToken();
            })
        })
    }

    async storeToken(accessToken){
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
            Actions.launchDecision()
            this.getToken();
        } catch(error) {
            this.setState({error: "Something went wrong: " + error, errorPresent: true});
        }
    }

    async getToken(){
        try {
            var token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is: " + token)
        } catch(error) {
            error_log = "Something went wrong: " + error;
            console.log(error_log);
            this.setState({error: error_log, errorPresent: true});
        }
    }

    async removeToken(){
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            this.getToken()
        } catch(error) {
            error_log = "Something went wrong: " + error;
            console.log(error_log);
            this.setState({error: error_log, errorPresent: true});
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.registrationDetailsContainer}>
                    <StyledInput
                        title="name"
                        placeholder="name"
                        onChangeText={(val) => this.setState({name: val})}
                        value={this.state.name}
                    />
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
                        value={this.state.password}
                    />
                    <StyledInput
                        title="passwordConfirmation"
                        placeholder="password confirmation"
                        secureTextEntry={true}
                        onChangeText={(val) => this.setState({passwordConfirmation: val})}
                        value={this.state.passwordConfirmation}
                    />
                    <Button title='register'
                            style={styles.button}
                            onPress={() => this.onRegisterPressed()}
                            containerViewStyle={styles.buttonContainer}
                            fontFamily="myriad-pro-regular"
                            backgroundColor="#EEBE2E"
                            color="#231F20"
                            borderRadius={5}
                    />
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
    title:{
        marginTop: 40
    },
    registrationDetailsContainer:{
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        marginTop: 80
    }
};
