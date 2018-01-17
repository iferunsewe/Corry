import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class ProfileScreen extends Component{

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.mainDetailsContainer}>
                    <Image style={styles.profilePhoto}/>
                    <Text style={styles.userLocation}>{this.props.userLocation || 'london'}</Text>
                    <Text style={styles.userName}>{this.props.userName || 'Ife Runsewe'}</Text>
                    <View style={styles.tripDetails}>
                        <Text style={styles.numberOfTrips}>{this.props.numberOfTrips || '17 trips'}</Text>
                        <Text style={styles.rating}>{this.props.rating || '4.78'}</Text>
                    </View>
                </View>
                <View style={styles.recentActivityContainer}>
                    <Text style={styles.title}>recent activity</Text>
                </View>
                <View style={styles.reviewsContainer}>
                    <Text style={styles.title}>reviews</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
