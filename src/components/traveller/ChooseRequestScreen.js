import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
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
                <Text style={styles.text}>Destination</Text>
                <View>
                    <Text style={styles.destinationText}>{this.props.destination}</Text>
                </View>
                <Text style={styles.text}>Requests</Text>
                <List containerStyle={styles.requestsList}>
                    {
                        dummyRequests.map((l, i) => (
                            <RequestSection
                                name={l.name}
                                location={l.location}
                                key={i}
                                price={l.price}
                                travellersFee={l.travellersFee}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        paddingBottom: 20
    },
    destinationText: {
        fontSize: 18,
        paddingBottom: 20
    },
    requestsList: {
        flex: 1,
        flexDirection: 'column'
    }
});

const dummyRequests = [
    {
        name: 'Converse Trainers',
        location: 'London',
        price: '£50',
        travellersFee: '£5'
    },
    {
        name: 'John Lewis Pots and Pans',
        location: 'London',
        price: '£67',
        travellersFee: '£6.70'
    },
    {
        name: 'iPhone X',
        location: 'London',
        price: '£999',
        travellersFee: '£99'
    },
];
