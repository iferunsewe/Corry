import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email_text: '',
            password: ''
        };
    }

    render() {
        return(
            <View>
                <TextInput title="email"
                           onChangeText={(text) => this.setState({email_text: text})}
                           value={this.state.email_text}
                           style={styles.textInput}
                           placeholder="email"
                />
                <TextInput title="password"
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({password: text})}
                           value={this.state.password}
                           style={styles.textInput}
                           placeholder="password"
                />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10
    }
});
