import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export default class NavBar extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.paddingLeft} onPress={() => Actions.pop()}>
                    <Icon
                        name="chevron-left"
                        style={styles.backButtonIcon}
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: (Platform.OS === 'ios') ? 64 : 54,
        flexDirection: 'row',
        paddingTop: 50,
        backgroundColor: '#fff'
    },
    paddingLeft:{
        paddingLeft: 10
    },
    backButtonIcon:{

    }
});
