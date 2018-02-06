import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'
import TravellerSection from '../traveller/TravellerSection';

export default class ChooseTravellerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destinationTextInput: ''
        };
    }


    componentWillMount() {
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.destinationContainer}
                    fontFamily='myriad-pro-regular'
                >
                    <Text style={[styles.text, styles.destinationTitle]}>enter destination</Text>
                    <TextInput
                        title="traveller's destination"
                        placeholder="london, lagos, new york..."
                        onChangeText={(text) => this.setState({destinationTextInput: text})}
                        value={this.state.destinationTextInput}
                        style={styles.destinationTextInput}
                    />
                </View>
                <View style={styles.travellersContainer}>
                    <Text style={[styles.text, styles.travellersTitle]}>travellers</Text>
                    <List containerStyle={styles.travellersList}>
                        {
                            dummyTravellers.map((l, i) => (
                                <TravellerSection
                                    name={l.name}
                                    location={l.location}
                                    avatarUrl={l.avatarUrl}
                                    rating={l.rating}
                                    key={i}
                                />
                            ))
                        }
                    </List>
                </View>
            </View>
        );
    }
}

const dummyTravellers = [
    {
        name: 'Temi Jones',
        location: 'London',
        avatarUrl: require('../../../assets/img/temi-jones.png'),
        rating: 4.32
    },
    {
        name: 'Ling Law',
        location: 'Birmingham',
        avatarUrl: require('../../../assets/img/ling-law.png'),
        rating: 5
    },
    {
        name: 'Jack Jones',
        location: 'New York',
        avatarUrl: require('../../../assets/img/jack-jones.png'),
        rating: 3.4
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'transparent'
    },
    destinationContainer: {
        flex: 0.2
    },
    travellersContainer: {
        flex: 0.8
    },
    text: {
        color: '#EEBE2E',
        borderBottomWidth: 0,
        fontSize: 20,
        marginLeft: 20
    },
    travellersList: {
        borderColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    destinationTextInput: {
        color: '#E6E7E8',
        borderColor: '#E6E7E8',
        borderWidth: 1.5,
        borderRadius: 6,
        width: Dimensions.get('window').width / 1.125,
        height: Dimensions.get('window').height / 18,
        alignContent: 'center',
        marginLeft: 20,
        paddingLeft: 20
    },
    destinationTitle:{
        marginTop: 40,
        marginBottom: 20
    },
    travellersTitle: {
        marginTop: 40
    }
});
