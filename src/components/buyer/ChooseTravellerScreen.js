import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChooseTravellerScreen extends Component{
    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Choose traveller</Text>
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
    }
});
