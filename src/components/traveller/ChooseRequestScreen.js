import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'
import RequestSection from '../traveller/RequestSection';

export default class ChooseRequestScreen extends Component{
    constructor(){
        super();
    }

    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.destinationContainer}>
                    <Text style={styles.title}>destination</Text>
                    <View style={styles.destinationDetails}>
                        <Text style={styles.destinationHeader}>LAGOS</Text>
                        <Text style={styles.destinationSubtitle}>Murtala Muhammed International Airport</Text>
                        <Image source={require('../../../assets/img/nigerian-flag.png')} />
                    </View>
                </View>
                <View style={styles.requestContainer}>
                    <Text style={styles.title}>view requests</Text>
                    <List containerStyle={styles.requestsList}>
                        {
                            dummyRequests.map((l, i) => (
                                <RequestSection
                                    name={l.name}
                                    location={l.location}
                                    key={i}
                                    price={l.price}
                                    travellersFee={l.travellersFee}
                                    avatarUrl={l.avatarUrl}
                                />
                            ))
                        }
                    </List>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 20,
        color: '#EEBE2E'
    },
    destinationTitle: {
        fontSize: 18,
        paddingBottom: 20
    },
    requestsList: {
        flex: 1,
        flexDirection: 'column'
    },
    destinationContainer: {
        flex: 0.2
    },
    requestContainer: {
        flex: 0.8
    },
    destinationHeader: {
        fontSize: 25,
        fontFamily: 'myriad-pro-regular',
        color: '#A7A9AC'
    },
    destinationSubtitle: {
        width: 150,
        fontSize: 11,
        fontFamily: 'myriad-pro-regular',
        color: '#A7A9AC',
        marginLeft: 5
    },
    destinationDetails: {
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
    },
];
