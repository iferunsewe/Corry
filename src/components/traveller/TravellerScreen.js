import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TravellerScreen extends Component{


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.decisionSection}>
                    <Button style={styles.button} title="Post flight" onPress={() => Actions.postFlight()} />
                </View>
                <View style={styles.decisionSection}>
                    <Button style={styles.button} title="Choose request" onPress={() => Actions.chooseRequest()} />
                </View>
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
        fontSize: 64
    },
    decisionSection: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        flex: 1
    }
});
