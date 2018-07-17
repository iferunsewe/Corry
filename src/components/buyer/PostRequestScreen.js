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
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';
import { getLocations, createRequest } from '../../actions/index';

export default class PostRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            quantity: 1,
            price: 0,
            name: '',
            shop: '',
            link: '',
            location_id: 1
        }
    }


    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    calculateTravellersFee(){
        if(this.state.price === 0){
            return 0
        }
        var calculation = parseFloat(this.state.price) * parseFloat(this.state.quantity) * 0.1;
        var fee = calculation.toFixed(2);
        return fee;
    }

    submitRequest(){
        createRequest({
            name: this.state.name,
            price: this.state.price,
            shop: this.state.shop,
            quantity: this.state.quantity,
            link: this.state.link,
            buyer_name: this.props.buyerName,
            buyer_phone_number: this.props.buyerPhoneNumber,
            buyer_email_address: this.props.buyerEmailAddress,
            location_id: this.state.location_id

        }).then(responseData => {
           console.log(responseData)
        }).catch(error => {
            console.log(error)
        });
        Actions.chooseTraveller()
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>item details</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'which country?',
                            value: null
                        }}
                        items={countries}
                        onValueChange={(value) => {
                        this.setState({
                            location_id: value
                        });
                    }}
                        style={{...pickerSelectStyles}}
                        hideIcon={true}
                    />

                    <StyledInput
                        title="name of product"
                        placeholder="name of product"
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                    />
                    <StyledInput
                        title="what shop can it be purchased from?"
                        placeholder="what shop can it be purchased from?"
                        onChangeText={(text) => this.setState({shop: text})}
                        value={this.state.shop}
                    />
                    <StyledInput
                        title="can we find your item on internet? enter url"
                        placeholder="can we find your item on internet? enter url"
                        onChangeText={(text) => this.setState({link: text})}
                        value={this.state.link}
                    />
                    <TextInput
                        title="how much is it?"
                        placeholder="how much is it? (£)"
                        onChangeText={(price) => this.setState({price: price})}
                        style={styles.priceTextInput}
                        keyboardType="numeric"
                        maxLength={5}
                    />
                    <View style={styles.quantityInputContainer}>
                        <Text style={styles.quantityText}>quantity: </Text>
                        <TextInput
                            title="quantity"
                            style={styles.quantityInput}
                            maxLength={3}
                            keyboardType="numeric"
                            defaultValue="1"
                            onChangeText={(quantity) => this.setState({quantity})}
                        />
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.text}>travellers fee</Text>
                </View>
                <View style={styles.travellersFeeContainer}>
                    <Text style={styles.travellersFee}>£{this.calculateTravellersFee()}</Text>
                </View>
                <Button title='request item'
                        style={styles.button}
                        onPress={() => this.submitRequest()}
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
    },
    locationPicker: {
        width: Dimensions.get('window').width / 1.25,
        height: Dimensions.get('window').height / 18,
        borderWidth: 1.5,
        borderRadius: 6,
        padding: 10,
        borderColor: '#E6E7E8',
        marginBottom: 10,
        marginLeft: 10
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: Dimensions.get('window').width / 1.25,
        height: Dimensions.get('window').height / 18,
        borderWidth: 1.5,
        borderRadius: 6,
        padding: 10,
        borderColor: '#E6E7E8',
        marginBottom: 10,
        fontSize: 15,
        marginLeft: 16,
        fontFamily: 'myriad-pro-regular'
    }
});

const countries = [
    {
        label: 'UK',
        value: 1,
        name: 'United Kingdom',
        id: '1'
    },
    {
        label: 'Nigeria',
        value: 2,
        name: 'Nigeria',
        id: '2'
    }

]
