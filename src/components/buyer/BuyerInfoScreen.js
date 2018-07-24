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
import ErrorText from '../helpers/ErrorText'

export default class BuyerInfoScreen extends Component {
    constructor() {
        super();
        this.state = {
            buyerName: '',
            buyerPhoneNumber: '',
            buyerEmailAddress: '',
            error: '',
            errorPresent: false
        }
    }

    postState (){
        Actions.postRequest(this.state)
    }

    blankFieldsExist(){
        return this.state.buyerName == '' || this.state.buyerPhoneNumber == '' || this.state.buyerEmailAddress == '' || this.errorPresent
    }

    validateEmail(text){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            this.setState({buyerEmailAddress: text, error: "Email is not in the correct format", errorPresent: true});
            return false;
        }
        else {
            this.setState({buyerEmailAddress: text, error: '', errorPresent: false});
        }
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
                        value={this.state.buyerName}
                        textContentType="name"
                    />
                    <StyledInput
                        title="buyer's phone number"
                        placeholder="phone number (with country code)"
                        onChangeText={(text) => this.setState({buyerPhoneNumber: text})}
                        value={this.state.buyerPhoneNumber}
                        textContentType="telephoneNumber"
                    />
                    <StyledInput
                        title="buyer's email address"
                        placeholder="email address"
                        onChangeText={(text) => this.validateEmail(text)}
                        value={this.state.buyerEmailAddress}
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
                        disabled={this.blankFieldsExist()}
                />
                <ErrorText error={this.state.error} errorPresent={this.state.errorPresent}/>
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

