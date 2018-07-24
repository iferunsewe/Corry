import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'
import RequestSection from '../traveller/RequestSection';
import { getLocation } from '../../actions/index';
import RNPickerSelect from 'react-native-picker-select';

export default class ChooseRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            requests: [],
            location: {},
            airport: '',
            flagImage: ''
        }
    }

    componentWillMount() {
        this.fetchLocation()
    }

    fetchLocation(id) {
        var id = id || 1;
        getLocation(id).then(responseData => {
            this.setState({
                location: responseData,
                requests: responseData['requests'],
                airport: responseData['airports'][0]['name'],
                flagImage: this.pickCountryFlag(responseData['id'])
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    avatarUrl(i){
        if(dummyRequests[i]){
            return dummyRequests[i].avatarUrl
        } else {
            return require('../../../assets/img/crunchy_ginger_biscuits.png')
        }
    }

    pickCountryFlag(id){
        return countries[id - 1].flagImage
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.locationContainer}>
                    <Text style={styles.title}>Destination</Text>
                    <RNPickerSelect
                        placeholder={{
                            label: 'which country?',
                            value: null
                        }}
                        items={countries}
                        onValueChange={(value) => {
                            console.log("Changing location: " + value)
      
                    }}
                        style={{...pickerSelectStyles}}
                        hideIcon={true}
                    />
                    <View style={styles.locationDetails}>
                        <Text style={styles.locationHeader}>{this.state.location['name']}</Text>
                        <Text style={styles.locationSubtitle}>{this.state.airport}</Text>
                        <Image source={this.state.flagImage} />
                    </View>
                </View>
                <View style={styles.requestContainer}>
                    <Text style={styles.title}>View requests</Text>
                    <List containerStyle={styles.requestsList}>
                        {
                            this.state.requests.map((l, i) => (
                                <RequestSection
                                    name={l['name']}
                                    key={i}
                                    price={l['price']}
                                    travellersFee={l['traveller_fee']}
                                    id={l['id']}
                                    avatarUrl={this.avatarUrl(i)}
                                    buyerName={l['buyer_name']}
                                    buyerEmailAddress={l['buyer_email_address']}
                                    buyerPhoneNumber={l['buyer_phone_number']}
                                />
                            ))
                        }
                    </List>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 20,
        color: '#EEBE2E'
    },
    locationTitle: {
        fontSize: 18,
        paddingBottom: 20
    },
    requestsList: {
        flex: 1,
        flexDirection: 'column'
    },
    locationContainer: {
        flex: 0.2
    },
    requestContainer: {
        flex: 0.8
    },
    locationHeader: {
        fontSize: 25,
        fontFamily: 'myriad-pro-regular',
        color: '#A7A9AC'
    },
    locationSubtitle: {
        width: 150,
        fontSize: 11,
        fontFamily: 'myriad-pro-regular',
        color: '#A7A9AC',
        marginLeft: 5
    },
    locationDetails: {
        marginLeft: 20,
        flexDirection: 'row'
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
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 16,
        fontFamily: 'myriad-pro-regular'
    }
});

const dummyRequests = [
    {
        name: 'Converse All Stars',
        location: 'London',
        price: '£50',
        travellersFee: '£5',
        avatarUrl: require('../../../assets/img/converse-trainers.png')
    },
    {
        name: 'John Lewis Pots and Pans',
        location: 'London',
        price: '£67',
        travellersFee: '£6.70',
        avatarUrl: require('../../../assets/img/john-lewis-pots-pans.png')
    },
    {
        name: 'iPhone 7',
        location: 'London',
        price: '£599',
        travellersFee: '£59.50',
        avatarUrl: require('../../../assets/img/iphone-7.png')
    }
];

const countries = [
    {
        label: 'London',
        value: 1,
        name: 'London',
        id: 1,
        flagImage: require('../../../assets/img/british-flag.svg.png')
    },
    {
        label: 'Lagos',
        value: 2,
        name: 'Lagos',
        id: 2,
        flagImage: require('../../../assets/img/nigerian-flag.png')
    }

];
