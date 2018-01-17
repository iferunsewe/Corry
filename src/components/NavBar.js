import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image ,
    Dimensions
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class NavBar extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={() => Actions.pop()}>
                    <Icon
                        name="chevron-left"
                        size={40}
                    />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/img/thumbnail-logo.png')}/>
                </View>
                <View style={styles.hamburgerContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: (Platform.OS === 'ios') ? 89 : 79,
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: '#EEBE2E'
    },
    backButtonContainer: {
        paddingLeft: 10,
        flex: 0.2,
        alignItems: 'flex-start'
    },
    logoContainer: {
        flex: 0.6,
        alignItems: 'center',
        marginTop: 4
    },
    hamburgerContainer: {
        flex: 0.2
    }
});
