import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import Moment from 'react-moment';

export default class ExchangeDetailsScreen extends Component{
    generateRandomFiveDigitNumber() {
        return Math.floor(Math.random() * 100000) + 1;
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.itemInfoContainer}>
                    <Text style={[styles.title, styles.firstTitle]}>Item Info</Text>
                    <View style={styles.detailsContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={[styles.font, styles.itemName]}>{this.props.itemName || defaultExchange.itemName}</Text>
                            <Text style={[styles.font]}>Price: {this.props.itemPrice || defaultExchange.itemPrice}</Text>
                            <Text style={[styles.font]}>Traveller fee: {this.props.travellersFee|| defaultExchange.travellersFee}</Text>
                        </View>
                        <View style={styles.itemImageContainer}>
                            <Image
                                style={styles.itemImage}
                                source={this.props.itemImage|| defaultExchange.itemImage}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.title}>Date</Text>
                    <Moment
                        element={Text}
                        style={[styles.font, styles.tripDate]}
                        interval={0}
                        format="Do MMMM YYYY"
                    >{this.props.date || defaultExchange.date}</Moment>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.title}>Location</Text>
                    <View style={styles.detailsContainer}>
                        <View style={styles.locationDetailsContainer}>
                            <Text style={[styles.font]}>6 Hartland Road</Text>
                            <Text style={[styles.font]}>Camden</Text>
                            <Text style={[styles.font]}>London</Text>
                            <Text style={[styles.font]}>NW1 7DB</Text>
                            <Text style={[styles.font]}>see map</Text>
                        </View>
                        <View style={styles.locationOnMapContainer}>
                            <Image
                                style={styles.locationOnMap}
                                source={require('../../assets/img/dummy-location-image.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buyerCodeContainer}>
                    <Text style={styles.title}>Buyer Code</Text>
                    <View style={styles.buyerCodeDetails}>
                        <Text style={[styles.font, styles.buyerCode]}>{this.generateRandomFiveDigitNumber()}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        color: '#EEBE2E',
        fontFamily: 'myriad-pro-regular'
    },
    itemImage: {
        width: 125,
        height: 125,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: '#BCBEC0'
    },
    itemImageContainer: {
        flex: 0.3,
        alignItems: 'flex-end'
    },
    detailsContainer: {
        flexDirection: 'row',
        flex: 1
    },
    infoContainer: {
        flex: 0.7
    },
    font: {
        fontFamily: 'myriad-pro-regular',
        color: '#BCBEC0'
    },
    itemInfoContainer: {
        flex: 0.35
    },
    dateContainer: {
        flex: 0.15
    },
    locationContainer: {
        flex: 0.3,
    },
    buyerCodeContainer: {
        flex: 0.2
    },
    tripDate: {
        color: '#BCBEC0',
        fontSize: 25
    },
    firstTitle: {
        marginTop: 40
    },
    buyerCodeDetails: {
        alignItems: 'center'
    },
    buyerCode: {
        fontSize: 40
    },
    itemName: {
        fontSize: 25
    },
    locationOnMapContainer: {
        flex: 0.7,
        justifyContent: 'flex-end'
    },
    locationDetailsContainer: {
        flex: 0.3
    },
    locationOnMap: {
        flex: 1,
        width: 235,
        resizeMode: 'contain'
    }
});

const defaultExchange = {
    itemName: 'Converse All Stars',
    itemLocation: 'London',
    itemPrice: '£50',
    travellersFee: '£5',
    itemImage: require('../../assets/img/converse-trainers.png'),
    date: '2018-03-19T12:59-0500'
};
