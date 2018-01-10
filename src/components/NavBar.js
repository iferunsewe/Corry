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
                <TouchableOpacity style={styles.paddingLeft} onPress={() => Actions.pop()}>
                    <Icon
                        name="chevron-left"
                        style={styles.backButtonIcon}
                        size={40}
                    />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/img/thumbnail-logo.png')}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: (Platform.OS === 'ios') ? 84 : 74,
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: '#EEBE2E'
    },
    paddingLeft:{
        paddingLeft: 10
    },
    logoContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginLeft: -50,
        marginTop: 4
    }
});
