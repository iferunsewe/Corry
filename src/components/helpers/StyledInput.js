import React, {Component} from 'react';
import {  View, Text, StyleSheet, TextInput } from 'react-native';

export default class StyledInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_text: ''
        };
    }

    render() {
        return(
                <TextInput title={this.props.title || ''}
                           onChangeText={(text) => this.setState({input_text: text})}
                           value={this.state.input_text}
                           style={styles.textInput}
                           placeholder={this.props.placeholder || ''}
                           secureTextEntry={this.props.secureTextEntry || false}
                />
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