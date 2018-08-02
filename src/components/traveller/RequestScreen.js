import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import ActivitySection from '../profile/ActivitySection';
import ReviewSection from '../profile/ReviewSection';
import { FormattedCurrency } from 'react-native-globalize';

export default class RequestScreen extends Component{


    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.mainDetailsContainer}>
                    <Image style={styles.itemPhoto} source={this.props.imageUrl} />
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName} numberOfLines={2}>{this.props.name || defaultProfile.name}</Text>
                    </View>
                    <Text style={styles.itemLocation}>{this.props.location || defaultProfile.location}</Text>
                    <View style={styles.moneyDetails}>
                        <Text style={styles.travellersFee}>Can earn <FormattedCurrency currency="GBP" value={this.props.travellersFee}/></Text>
                        <Text style={styles.price}>Price is <FormattedCurrency currency="GBP" value={this.props.price}/></Text>
                    </View>
                </View>
                <View style={styles.buyerInfoContainer}>
                    <Text style={styles.title}>Buyer info</Text>
                    <Text>Wanted by: {this.props.buyerName || defaultProfile.location}</Text>
                    <Text>{this.props.buyerEmailAddress || defaultProfile.location}</Text>
                    <Text>{this.props.buyerPhoneNumber || defaultProfile.location} </Text>
                </View>
                <View style={styles.additionalItemInfoContainer}>
                    <Text style={styles.title}>Additional info</Text>
                    <Text style={styles.additionalItemInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada sit amet tortor eu euismod. Duis at massa non dolor sollicitudin tempor nec in purus. Quisque in neque vel dolor consequat facilisis ac nec risus.</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainDetailsContainer: {
        flex: 0.4,
        alignItems: 'center',
        marginTop: 40
    },
    buyerInfoContainer:{
        flex: 0.3,
        marginTop: 10,
        paddingLeft: 20
    },
    itemPhoto: {
        width: 125,
        height: 125,
        borderRadius: 5
    },
    itemLocation: {
        fontSize: 18,
        color: '#BCBEC0',
        fontFamily: 'myriad-pro-regular'
    },
    travellersFee: {
        fontSize: 16,
        color: '#EEBE2E',
        fontFamily: 'myriad-pro-regular'
    },
    price: {
        fontSize: 15,
        color: '#BCBEC0',
        fontFamily: 'myriad-pro-regular'
    },
    space: {
        marginTop: 5,
        marginBottom: 5
    },
    itemNameContainer: {
        width: Dimensions.get('window').width / 1.2,
        alignItems: 'center'
    },
    itemName: {
        fontSize: 35,
        fontFamily: 'myriad-pro-regular'
    },
    additionalItemInfoContainer: {
        width: Dimensions.get('window').width / 1.2,
        flex: 0.3,
        paddingLeft: 20
    },
    title: {
        fontSize: 20,
        marginTop: 45,
        marginBottom: 15,
        marginLeft: 20,
        color: '#EEBE2E'
    },
    moneyDetails: {
        alignItems: 'center'
    }

});

const defaultProfile = {
    name: 'Timi Williams',
    location: 'London',
    avatarUrl: require('../../../assets/img/timi-williams.png'),
    rating: 4.78,
    numberOfTrips: 17
};

