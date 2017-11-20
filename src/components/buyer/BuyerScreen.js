import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class BuyerScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.decisionSection}>
                    <Button style={styles.button} title="Post a request" onPress={() => Actions.postRequest()} />
                </View>
                <View style={styles.decisionSection}>
                    <Button style={styles.button} title="Choose traveller" onPress={() => Actions.chooseTraveller()} />
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
