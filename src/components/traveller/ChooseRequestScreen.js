import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'
import RequestSection from '../traveller/RequestSection';
import { getLocation } from '../../actions/index';

export default class ChooseRequestScreen extends Component{
    constructor(){
        super();
        this.state = {
            requests: [],
            location: {},
            airport: ''
        }
    }

    componentDidMount() {
        this.fetchLocation()
    }

    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    fetchLocation(name) {
        getLocation().then(responseData => {
            this.setState({
                location: responseData,
                requests: responseData['requests'],
                airport: responseData['airports'][0]['name']
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

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.locationContainer}>
                    <Text style={styles.title}>Destination</Text>
                    <View style={styles.locationDetails}>
                        <Text style={styles.locationHeader}>{this.state.location['name']}</Text>
                        <Text style={styles.locationSubtitle}>{this.state.airport}</Text>
                        <Image source={require('../../../assets/img/nigerian-flag.png')} />
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
