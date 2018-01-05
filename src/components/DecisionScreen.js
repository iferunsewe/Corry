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
                        title="Traveller"
                        onPress={() => Actions.traveller()}
                        icon={{name: 'aircraft-take-off', type: 'entypo'}}
                        fontFamily='myriad-pro-regular'
                />

                <Button containerViewStyle={styles.button}
                        buttonStyle={styles.button}
                        title="Buyer"
                        onPress={() => Actions.buyer()}
                        icon={{name: 'shopping-cart', type: 'foundation'}}
                        fontFamily='myriad-pro-regular'
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
    text: {
        fontSize: 64
    },
    decisionSection: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 0.5
    },
    button:{
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
