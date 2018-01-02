import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { ListItem } from 'react-native-elements'


export default class TravellerSection extends Component {
    constructor() {
        super();
        this.state = {
            showLoginInput: false
        };
    }

    render() {
        return(
            <ListItem
                containerStyle={styles.container}
                hideChevron={true}
                avatar={require('../../assets/abstract-user-flat-1.png')}
                avatarStyle={styles.avatarStyle}
                avatarContainerStyle={styles.avatarContainer}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.location}</Text>
                    </View>
                }
            >
            </ListItem>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 4,
        flexDirection: 'column'
    },
    avatarStyle: {
        backgroundColor: 'green'
    },
    avatarContainer: {
        width: 100,
        height: 120,
        backgroundColor: 'blue',
        position: 'absolute'
    },
    subtitleView: {
        flexDirection: 'column',
        top: 150
    }
});
