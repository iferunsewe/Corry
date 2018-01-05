import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerIOS,
    TextInput
} from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class PostFlightScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            destination: ''
        }
    }

    componentWillMount(){
        // Displays login screen before showing this screen
        // Actions.authentication();
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>What are your flight details?</Text>
                <TextInput
                    title="outbound flight"
                    placeholder="flying from?"
                    style={styles.textInput}
                />
                <TextInput
                    title="inbound flight"
                    placeholder="flying to?"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({destination: text})}
                    value={this.state.destination}
                />
                <DatePickerIOS
                    date={this.state.date}
                    onDateChange={(date)=>this.setState({date})}
                    mode="date"
                    style={styles.datePicker}/>
                <Button title='submit flight' style={styles.button} onPress={() => Actions.chooseRequest({destination: this.state.destination})}/>
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
        fontSize: 25,
        paddingBottom: 20
    },
    datePicker: {
        flex: 0.4,
        width: 275
    },
    button: {
        width: 300,
        paddingTop: 30
    },
    textInput: {
        width: 200,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10
    }
});
