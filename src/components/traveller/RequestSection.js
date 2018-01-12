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
        console.log(this.props.avatarUrl);
        return(
            <ListItem
                containerStyle={styles.container}
                avatar={this.props.avatarUrl}
                avatarStyle={styles.avatarStyle}
                avatarContainerStyle={styles.avatarContainer}
                avatarOverlayContainerStyle={styles.avatarOverlayContainer}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Text style={styles.text}>{this.props.name}</Text>
                        <Text style={styles.text}>{this.props.location}</Text>
                        <Text style={styles.text}>Price: {this.props.price}</Text>
                        <Text style={styles.text}>Fee: {this.props.travellersFee}</Text>
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
        height: Dimensions.get('window').height / 6
    },
    text: {
        color: '#929293'
    },
    avatarContainer: {
        width: "100%",
        position: 'absolute',
        paddingLeft: 20
    },
    avatarStyle: {
        width: 100,
        height: 100
    },
    avatarOverlayContainer:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    subtitleView: {

    }
};
