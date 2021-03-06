import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';

export default class StyledInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <TextInput title={this.props.title || ''}
                           onChangeText={this.props.onChangeText}
                           value={this.props.value}
                           style={styles.textInput}
                           placeholder={this.props.placeholder || ''}
                           secureTextEntry={this.props.secureTextEntry || false}
                           textContentType={this.props.textContentType || 'none'}
                />
        )
    }

}

const styles = StyleSheet.create({
    textInput: {
        width: Dimensions.get('window').width / 1.25,
        height: Dimensions.get('window').height / 18,
        borderWidth: 1.5,
        padding: 10,
        fontSize: 15,
        borderRadius: 6,
        borderColor: '#E6E7E8',
        marginBottom: 10,
        fontFamily: 'myriad-pro-regular'
    }
});