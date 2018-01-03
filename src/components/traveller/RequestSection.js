import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { ListItem } from 'react-native-elements'


export default class RequestSection extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ListItem
                containerStyle={styles.container}
                avatarStyle={styles.avatarStyle}
                avatarContainerStyle={styles.avatarContainer}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.location}</Text>
                        <Text>Price: {this.props.price}</Text>
                        <Text>Fee: {this.props.travellersFee}</Text>
                    </View>
                }
            >
            </ListItem>

        );
    }
}

const styles = {
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 5
    },
    text: {
        fontSize: 25,
        paddingBottom: 20
    },
};
