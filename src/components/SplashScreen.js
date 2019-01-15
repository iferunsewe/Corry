import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { verifyUser } from '../actions/index';

const ACCESS_TOKEN = 'access_token';

export default class SplashScreen extends Component {
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.getToken();
        }, 3000);
    }

    async getToken() {
        try {
            var token = await AsyncStorage.getItem(ACCESS_TOKEN);
            if(!token){
                console.log("Token is not set");
                Actions.login();
            } else {
                this.verifyToken(token)
            }
            //console.log("token is: " + token)
        } catch(error) {
            console.log("Something went wrong: " + error);
            Actions.login();
        }
    }

    verifyToken(token) {
        var accessToken = token;
        verifyUser(accessToken)
            .then(_ =>{
                Actions.launchDecision();
            }).catch(error => {
                console.log("Something went wrong: " + error);
                Actions.login();
            })
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return(
          <View style={styles.container}>
            <Image
                source={require('../../assets/img/smaller-logo.png')}
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
  }
});