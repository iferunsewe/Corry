import React, {Component} from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SplashScreen extends Component {
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            Actions.decision();
        }, 2000);
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
    justifyContent: 'center',
  }
});