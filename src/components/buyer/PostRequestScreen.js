import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    Picker,
    Dimensions
} from 'react-native';
import {
    Button,
    Slider
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';

export default class PostRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            quantity: "1",
            price: "0.00",
            itemLocation: ""
        }
    }
    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    calculateTravellersFee(){
        var calculation = parseFloat(this.state.price) * parseFloat(this.state.quantity) * 0.1;
        return calculation.toFixed(2);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.detailsTitle}>
                    <Text style={styles.text}>Item details</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <TextInput
                        title="which country?"
                        placeholder="which country?"
                        onChangeText={(text) => this.setState({itemLocation: text})}
                        style={styles.priceTextInput}
                        keyboardType="numeric"
                    />
                    <StyledInput
                        title="name of product"
                        placeholder="name"
                    />
                    <StyledInput
                        title="what shop can it be purchased from?"
                        placeholder="what shop can it be purchased from?"
                    />
                    <TextInput
                        title="how much is it?"
                        placeholder="how much is it? (£)"
                        onChangeText={(text) => this.setState({price: text})}
                        style={styles.priceTextInput}
                        keyboardType="numeric"
                    />
                    <View style={styles.quantityInputContainer}>
                        <Text style={styles.quantityText}>Quantity: </Text>
                        <TextInput
                            title="quantity"
                            style={styles.quantityInput}
                            maxLength={3}
                            keyboardType="numeric"
                            defaultValue="1"
                            value={this.state.quantity}
                            onChangeText={(quantity) => this.setState({quantity})}
                        />
                    </View>
                </View>

                <View style={styles.detailsTitle}>
                    <Text style={styles.text}>Travellers fee</Text>
                </View>
                <View style={styles.travellersFeeContainer}>
                    <Text style={styles.travellersFee}>£{this.calculateTravellersFee()}</Text>
                </View>
                <Button title='request item'
                        style={styles.button}
                        onPress={() => Actions.chooseTraveller()}
                        containerViewStyle={styles.buttonContainer}
                        fontFamily="myriad-pro-regular"
                        backgroundColor="#EEBE2E"
                        color="#231F20"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 25,
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
    detailsTitle:{
        marginTop: 40
    },
    quantityInput: {
        width: Dimensions.get('window').width / 7,
        height: Dimensions.get('window').height / 18,
        borderWidth: 1.5,
        borderColor: '#E6E7E8',
        fontFamily: 'myriad-pro-regular',
        fontSize: 15,
        padding: 10,
        borderRadius: 6
    },
    quantityText:{
        fontSize: 14,
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E',
    },
    quantityInputContainer:{
        width: Dimensions.get('window').width / 1.25,
        alignItems: 'flex-start'
    },
    travellersFee: {
        fontSize: 20,
        color: '#A7A9AC'
    },
    travellersFeeContainer:{
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.25,
        marginLeft: 30
    },
    priceTextInput:{
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
