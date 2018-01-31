import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Moment from 'react-moment';
import { Actions } from 'react-native-router-flux';

export default class ActivitySection extends Component{
    render(){
        return(
            <ListItem style={styles.container}
                      subtitle={
                          <View style={styles.subtitleView}>
                              <View styles={styles.leftHandSideContainer}>
                                  <Moment
                                      element={Text}
                                      style={styles.tripDetails}
                                      interval={0}
                                      format="Do MMMM YYYY"
                                  >{this.props.date}</Moment>
                                  <Text style={styles.tripDetails}>{this.props.route}</Text>
                              </View>
                          </View>
                      }
                      rightIcon={
                          <TouchableOpacity style={styles.logoContainer} onPress={() => Actions.exchangeDetails()}>
                              <Text style={styles.viewTripText}>view trip</Text>
                          </TouchableOpacity>

                      }
                      onPressRightIcon={()=> Actions.exchangeDetails()}
            >
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 8,
        flexDirection: 'row'
    },
    tripDetails: {
        fontSize: 10,
        color: '#A7A9AC'
    },
    viewTripText: {
        fontFamily: 'myriad-pro-regular',
        color: '#EEBE2E'
    }
});