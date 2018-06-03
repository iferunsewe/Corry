import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
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

    onLoginPressed(){
        loginUser({
            email: this.state.email,
            password: this.state.password
        }).then(responseData => {
            console.log(responseData)
            // Actions.decision()
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>login</Text>
                </View>
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
                        onChangeText={(val) => this.setState({passwordConfirmation: val})}
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
    loginDetailsContainer:{
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    }
}
