import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Moment from 'react-moment';

export default class ActivitySection extends Component{
    render(){
        return(
            <ListItem style={styles.container}
                      hideChevron={true}
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
                      rightTitle="view trip"
                      rightTitleStyle={styles.viewTripText}
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