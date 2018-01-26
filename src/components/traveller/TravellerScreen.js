import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class TravellerScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Button
                    containerViewStyle={styles.button}
                    buttonStyle={styles.button}
                    title="post flight"
                    onPress={() => Actions.postFlight()}
                    fontSize={20}
                    fontFamily='myriad-pro-regular'
                    color='white'
                />
                <Button
                    containerViewStyle={[styles.button, styles.secondButton]}
                    buttonStyle={styles.button}
                    title="choose request"
                    onPress={() => Actions.chooseRequest()}
                    fontSize={20}
                    fontFamily='myriad-pro-regular'
                    color='white'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEBE2E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondButton: {
        borderTopColor: 'white',
        borderTopWidth: 1
    }
});
