import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image ,
    Dimensions,
    AsyncStorage
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

const ACCESS_TOKEN = 'access_token';

export default class NavBar extends Component {
    async removeToken(){
        try {
            var token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is: " + token)
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            var token = await AsyncStorage.getItem(ACCESS_TOKEN); // To check token has actually been deleted
            console.log("new token is: " + token)
        } catch(error) {
            console.log("Something went wrong: " + error)
        }
    }

    async logout(){
        this.removeToken();
        Actions.login()
    }


    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={() => Actions.pop()}>
                    <Icon
                        name="chevron-left"
                        size={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoContainer} onPress={() => Actions.decision()}>
                    <Image source={require('../../assets/img/thumbnail-logo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hamburgerContainer} onPress={() => this.logout()}>
                    <Icon
                        name="logout"
                        size={40}
                        type="material-community"
                    />
                </TouchableOpacity>
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
