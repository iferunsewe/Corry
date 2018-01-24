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
                avatar={this.props.avatarUrl}
                avatarContainerStyle={styles.avatarContainer}
                avatarOverlayContainerStyle={styles.avatarOverlayContainer}
                avatarStyle={styles.avatarStyle}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Text style={styles.locationText}>{this.props.location}</Text>
                        <Text style={styles.nameText}>{this.props.name}</Text>
                    </View>
                }
                subtitleContainerStyle={styles.subtitlesContainer}
                fontFamily='myriad-pro-regular'
            >
            </ListItem>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 4
    },
    avatarStyle: {
        position: 'absolute',
        height: 100,
        width: 100,
        borderRadius: 5
    },
    avatarContainer: {
        width: "100%",
        position: 'absolute'
    },
    subtitleView: {
        alignItems: 'center'
    },
    avatarOverlayContainer:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    subtitlesContainer:{
        top: 110
    },
    locationText: {
        fontSize: 10,
        color: '#BCBEC0',
        marginBottom: 2
    }
});
