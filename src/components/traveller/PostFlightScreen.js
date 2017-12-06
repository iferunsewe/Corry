import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerIOS
} from 'react-native';
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import StyledInput from '../helpers/StyledInput'

export default class PostFlightScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
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
                <StyledInput title="outbound flight" placeholder="flying from?"/>
                <StyledInput title="inbound flight" placeholder="flying to?"/>
                <DatePickerIOS
                    date={this.state.date}
                    onDateChange={(date)=>this.setState({date})}
                    mode="date"
                    style={styles.datePicker}/>
                <Button title='make request' style={styles.button} onPress={() => Actions.chooseRequest()}/>
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
    }
});
