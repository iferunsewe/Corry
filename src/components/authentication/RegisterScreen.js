import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput'
import { Button } from 'react-native-elements'
import { registerUser } from '../../actions/index';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: []
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
            console.log(responseData);
        }).catch(error => {
            console.log(error)
        })
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
    registrationDetailsContainer:{
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        marginTop: 80
    }
}
