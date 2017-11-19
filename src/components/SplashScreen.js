import React, {Component} from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SplashScreen extends Component {
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            Actions.decision();
        }, 5000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return(
          <View style={styles.container}>
              <Text style={styles.text}>Splash Screen</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 64
  }
});