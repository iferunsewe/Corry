import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput';
import { List, ListItem } from 'react-native-elements'
import TravellerSection from '../traveller/TravellerSection';

export default class ChooseTravellerScreen extends Component {
    componentWillMount() {
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Enter destination</Text>
                <StyledInput
                    title="traveller's destination"
                    placeholder="London, Lagos, New York..."
                />
                <Text style={styles.text}>Travellers</Text>
                <List containerStyle={styles.travellersList}>
                    {
                        dummyTravellers.map((l, i) => (
                            <TravellerSection
                                name={l.name}
                                location={l.location}
                                key={i}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const dummyTravellers = [
    {
        name: 'John Smith',
        location: 'London',
        rating: 4.32
    },
    {
        name: 'Thomas Shelby',
        location: 'Birmingham',
        rating: 5
    },
    {
        name: 'Don Draper',
        location: 'New York',
        rating: 3.4
    },
];

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
    travellersList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
