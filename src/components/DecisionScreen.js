import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class DecisionScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Button containerViewStyle={styles.button}
                        buttonStyle={styles.button}
                        title="traveller"
                        onPress={() => Actions.traveller()}
                        icon={{name: 'aircraft-take-off', type: 'entypo'}}
                        fontFamily='myriad-pro-regular'
                        fontSize={20}
                />
                <Button containerViewStyle={[styles.button, styles.secondButton]}
                        buttonStyle={styles.button}
                        title="buyer"
                        onPress={() => Actions.buyer()}
                        icon={{name: 'shopping-cart', type: 'foundation'}}
                        fontFamily='myriad-pro-regular'
                        fontSize={20}
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
