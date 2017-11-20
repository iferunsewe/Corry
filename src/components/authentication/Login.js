import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <StyledInput
                    title="email"
                    placeholder="email"
                />
                <StyledInput
                    title="password"
                    placeholder="password"
                    secureTextEntry={true}
                />
            </View>
        )
    }

}
