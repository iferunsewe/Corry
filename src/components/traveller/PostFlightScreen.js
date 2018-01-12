import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Button, SearchBar} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class PostFlightScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            destination: ''
        }
    }

    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Enter flight number</Text>
                </View>
                <View style={styles.flightDetailsContainer}>
                    <SearchBar
                        onChangeText={(text) => this.setState({destination: text})}
                        placeholder='eg. AA100...'
                        containerStyle={styles.searchContainer}
                        inputStyle={styles.searchInput}
                        round
                        noIcon
                    />
                </View>
                <Button title='submit'
                        style={styles.button}
                        onPress={() => Actions.chooseRequest({destination: this.state.destination})}
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
        width: Dimensions.get('window').width / 1.25,
        paddingTop: 30
    },
    buttonContainer: {
        alignItems: 'center'
    },
    title:{
        marginTop: 40
    },
    flightDetailsContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    searchContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: Dimensions.get('window').width / 1.25
    },
    searchInput: {
        backgroundColor: 'transparent',
        fontFamily: 'myriad-pro-regular',
        color: "#231F20",
        borderColor: '#A7A9AC',
        borderWidth: 1,
        height: Dimensions.get('window').height / 18,
        fontSize: 20
    }
});
