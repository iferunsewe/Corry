import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    Dimensions
} from 'react-native';
import {
    Button,
    Slider
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';

export default class BuyerInfoScreen extends Component {
    constructor() {
        super();
        this.state = {
            buyerName: '',
            buyerPhoneNumber: '',
            buyerEmailAddress: ''
        }
    }

    postState (){
        console.log(this.state)
        Actions.postRequest(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>buyers details</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <StyledInput
                        title="buyer's name"
                        placeholder="what is your fullname?"
                        onChangeText={(text) => this.setState({buyerName: text})}
                        value={this.state.name}
                        textContentType="name"
                    />
                    <StyledInput
                        title="buyer's phone number"
                        placeholder="phone number (with country code)"
                        onChangeText={(text) => this.setState({buyerPhoneNumber: text})}
                        value={this.state.phoneNumber}
                        textContentType="telephoneNumber"
                    />
                    <StyledInput
                        title="buyer's email address"
                        placeholder="email address"
                        onChangeText={(text) => this.setState({buyerEmailAddress: text})}
                        value={this.state.emailAddress}
                        textContentType="emailAddress"
                    />
                </View>
                <Button title='submit details'
                        style={styles.button}
                        onPress={() => this.postState()}
                        containerViewStyle={styles.buttonContainer}
                        fontFamily="myriad-pro-regular"
                        backgroundColor="#EEBE2E"
                        color="#231F20"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        paddingBottom: 20,
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E',
        marginLeft: 20
    },
    button: {
        width: 300,
        paddingTop: 30
    },
    buttonContainer: {
        alignItems: 'center'
    },
    detailsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    title:{
        marginTop: 40
    }
});

