import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Keyboard
} from 'react-native';
import { Button, SearchBar, Icon} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class PostFlightScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            destination: '',
            showLoadingIcon: false,
            showResults: false
        }
    }

    displayFlightFound(){
        if(this.state.showResults){
            Keyboard.dismiss();
            setTimeout(() => {this.setState({showLoadingIcon: false})}, 1000);
            return <View>
                <View style={styles.title}>
                    <Text style={styles.text}>Flight found</Text>
                </View>
                <View style={styles.flightFoundContainer}>
                    <View style={styles.airlineLogoContainer}>
                        <Image style={styles.airlineLogo} source={require('../../../assets/img/emirates-logo.png')}/>
                    </View>
                    <View style={styles.flightFoundDetailsContainer}>
                        <View style={styles.airportInfoContainer}>
                            <Text style={styles.flightText}>20.25</Text>
                            <Text style={[styles.flightText, styles.airportCode]}>LGW</Text>
                            <Text style={styles.flightText}>London Gatwick</Text>
                        </View>
                        <View style={styles.arrowIconContainer}>
                            <Icon
                                name='md-arrow-dropright'
                                type='ionicon'
                                color='#A7A9AC'
                                size={35}
                            />
                        </View>
                        <View style={styles.airportInfoContainer}>
                            <Text style={styles.flightText}>15.40</Text>
                            <Text style={[styles.flightText, styles.airportCode]}>LOS</Text>
                            <Text style={styles.flightText}>Lagos Murtala</Text>
                            <Text style={styles.flightText}>Muhammed</Text>
                            <Text style={styles.flightText}>International Airport</Text>
                        </View>
                    </View>
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
        } else {
            return <Button title='find flight'
                        style={styles.button}
                        onPress={() => this.setState({showLoadingIcon: true, showResults: true})}
                        containerViewStyle={styles.buttonContainer}
                        fontFamily="myriad-pro-regular"
                        backgroundColor="#EEBE2E"
                        color="#231F20"
                    />
        }
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
                        showLoadingIcon={this.state.showLoadingIcon}
                    />
                </View>
                { this.displayFlightFound() }
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
    },
    flightFoundContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    airlineLogoContainer:{
        alignItems: 'center',
        marginBottom: 20
    },
    airlineLogo: {
        width: Dimensions.get('window').width / 6,
        height: Dimensions.get('window').height / 18
    },
    flightFoundDetailsContainer:{
        flexDirection: 'row'
    },
    airportInfoContainer: {
        width: Dimensions.get('window').width / 3,
        alignItems: 'center'
    },
    flightText: {
        color: '#A7A9AC',
        alignItems: 'center',
        fontFamily: 'myriad-pro-regular'
    },
    airportCode: {
        fontSize: 40
    },
    arrowIconContainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width / 6
    }
});
