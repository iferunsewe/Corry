import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import ActivitySection from '../profile/ActivitySection';
import ReviewSection from '../profile/ReviewSection';

export default class ProfileScreen extends Component{

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.mainDetailsContainer}>
                    <Image style={[styles.profilePhoto, styles.space]} source={this.props.avatarUrl || defaultProfile.avatarUrl} />
                    <Text style={[styles.userLocation, styles.space]}>{this.props.userLocation || defaultProfile.location}</Text>
                    <Text style={[styles.userName, styles.space]}>{this.props.userName || defaultProfile.name}</Text>
                    <View style={[styles.tripDetails, styles.space]}>
                        <Text style={styles.numberOfTrips}>{this.props.numberOfTrips || defaultProfile.numberOfTrips} trips | </Text>
                        <Text style={styles.rating}>{this.props.rating || defaultProfile.rating}</Text>
                    </View>
                </View>
                <View style={styles.recentActivityContainer}>
                    <Text style={styles.title}>Recent activity</Text>
                    {
                        dummyActivities.map((l, i) => (
                            <ActivitySection
                                date={l.date}
                                route={l.route}
                                key={i}
                            />
                        ))
                    }
                </View>
                <View style={styles.reviewsContainer}>
                    <Text style={styles.title}>Reviews</Text>
                    {
                        dummyReviews.map((l, i) => (
                            <ReviewSection
                                date={l.date}
                                reviewTitle={l.reviewTitle}
                                review={l.review}
                                rating={l.rating}
                                avatarUrl={l.avatarUrl}
                                key={i}
                            />
                        ))
                    }
                </View>
            </View>
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
    profilePhoto: {
        width: 125,
        height: 125,
        borderRadius: 5
    },
    userLocation: {
        fontSize: 20,
        color: '#BCBEC0',
        fontFamily: 'myriad-pro-regular'
    },
    space: {
        marginTop: 5,
        marginBottom: 5
    },
    userName: {
        fontSize: 35,
        fontFamily: 'myriad-pro-regular'
    },
    tripDetails: {
        flexDirection: 'row'
    },
    numberOfTrips: {
        fontSize: 20,
        fontFamily: 'myriad-pro-regular'
    },
    rating: {
        fontSize: 20,
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E'
    },
    title: {
        fontSize: 20,
        marginTop: 45,
        marginBottom: 10,
        marginLeft: 20,
        color: '#EEBE2E'
    },
    recentActivityContainer: {
        flex: 0.3
    },
    reviewsContainer: {
        flex: 0.3
    }
});

const defaultProfile = {
    name: 'Ife Runsewe',
    location: 'London',
    avatarUrl: require('../../../assets/img/ife-runsewe-profile.png'),
    rating: 4.78,
    numberOfTrips: 17
};

const dummyActivities = [
    {
        date: '2017-11-27T12:59-0500',
        route: 'London to Lagos'
    },
    {
        date: '2017-11-12T12:59-0500',
        route: 'London to Accra'
    }
];

const dummyReviews = [
    {
        date: '2017-12-20T12:59-0500',
        reviewTitle: 'Ife was a pleasure!',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada sit amet tortor eu euismod. Duis at massa non dolor sollicitudin tempor nec in purus. Quisque in neque vel dolor consequat facilisis ac nec risus.',
        rating: 4,
        avatarUrl: require('../../../assets/img/review-girl.png')
    }
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
