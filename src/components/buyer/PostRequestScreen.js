import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import {
    Button,
    Slider
} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';
import { getLocations, createRequest } from '../../actions/index';
import ErrorText from '../helpers/ErrorText'
import { ImagePicker } from 'expo';

export default class PostRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            quantity: 1,
            price: 0,
            name: '',
            shop: '',
            link: '',
            location_id: 1,
            error: '',
            errorPresent: false,
            showError: false,
            image: null
        }
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
            location_id: this.state.location_id,
            image: this.state.image
        }).then(responseData => {
            this.setState({error: '', errorPresent: false});
            Actions.request({
                    name: responseData['name'],
                    price: responseData['price'],
                    shop: responseData['shop'],
                    quantity: responseData['quantity'],
                    link: responseData['link'],
                    buyerName: responseData['buyer_name'],
                    buyerPhoneNumber: responseData['buyer_phone_number'],
                    buyerEmailAddress: responseData['buyer_email_address'],
                    travellersFee: responseData['traveller_fee'],
                    location: this.selectCountryById(this.state.location_id)['name'],
                    imageUrl: {uri: responseData["image_url"]},
                    imagePresent: true
            })
        }).catch(error => {
            console.log(error)
            this.setState({error: error["message"], errorPresent: true, showError: true});
        });

    }

    selectCountryById(id){
        return countries.find(country => {
            return country['id'] === id
        })
    }

    blankFieldsExist(){
        return this.state.name == '' || this.state.shop == '' || this.state.price == 0;

    }

    async pickImage(){
        var result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        let newImageURI = this.createImageBase64(result.uri, result.base64);

        if (!result.cancelled) {
            this.setState({ image: newImageURI});
        }
    };

    createImageBase64(uri, base64){
        let uriParts = uri.split('.');
        let fileType = uriParts[uriParts.length - 1];

        return 'data:image/' + fileType + ';base64,' + base64;
    }

    render() {
        let { image } = this.state;

        return(
            <ScrollView style={styles.container}>
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
                    <View style={styles.lastRowContainer}>
                        <View style={styles.priceInputContainer}>
                            <Text style={styles.quantityText}>price</Text>
                            <TextInput
                                title="how much is it?"
                                placeholder="price? "
                                onChangeText={(price) => this.setState({price: price})}
                                style={[styles.priceTextInput, styles.priceInput]}
                                keyboardType="numeric"
                                maxLength={8}
                                returnKeyType='done'
                            />
                        </View>
                        <View style={styles.quantityInputContainer}>
                            <Text style={styles.quantityText}>quantity</Text>
                            <TextInput
                                title="quantity"
                                style={styles.quantityInput}
                                maxLength={3}
                                keyboardType="numeric"
                                defaultValue="1"
                                onChangeText={(quantity) => this.setState({quantity})}
                                returnKeyType='done'
                            />
                        </View>
                    </View>
                    <View style={styles.imagePickerContainer}>
                        <View style={styles.imagePickerSubContainer}>
                            <Button
                                title="pick image"
                                onPress={() => this.pickImage()}
                                style={styles.imagePicker}
                                backgroundColor="#EEBE2E"
                                color="#231F20"
                                fontFamily="myriad-pro-regular"
                            />
                        </View>
                        <View style={styles.imagePickerSubContainer}>
                            {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
                        </View>
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
                        disabled={this.blankFieldsExist()}
                />
                <ErrorText error={this.state.error} errorPresent={this.state.errorPresent} showError={this.state.showError}/>
            </ScrollView>
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
    quantityInputContainer:{
        width: Dimensions.get('window').width / 2.5
    },
    priceInputContainer:{
        width: Dimensions.get('window').width / 2.5
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
    priceInput: {
        width: Dimensions.get('window').width / 3
    },
    lastRowContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 1.25
    },
    imagePickerContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 1.25,
    },
    imagePicker: {
        alignSelf: 'flex-start',
        marginLeft: -15,
        width: Dimensions.get('window').width / 2.5
    },
    uploadedImage: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },
    imagePickerSubContainer: {
        width: Dimensions.get('window').width / 2.5
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
        label: 'London',
        value: 1,
        name: 'London',
        id: 1
    },
    {
        label: 'Lagos',
        value: 2,
        name: 'Lagos',
        id: 2
    }

]
