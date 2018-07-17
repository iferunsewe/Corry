import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { ListItem } from 'react-native-elements'
import { FormattedCurrency } from 'react-native-globalize';
import { Actions } from 'react-native-router-flux';


export default class RequestSection extends Component {
    constructor() {
        super();
    }

    onPressListItem(){
        Actions.request({
            name: this.props.name,
            price: this.props.price,
            avatarUrl: this.props.avatarUrl,
            travellersFee: this.props.travellersFee,
            buyerName: this.props.buyerName,
            buyerEmailAddress: this.props.buyerEmailAddress,
            buyerPhoneNumber: this.props.buyerPhoneNumber
        })
    }

    render() {
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
                        <Text style={styles.text}>Price: <FormattedCurrency currency="GBP" value={this.props.price}/></Text>
                        <Text style={styles.text}>Fee: <FormattedCurrency currency="GBP" value={this.props.travellersFee}/></Text>
                    </View>
                }
                onPress={() => this.onPressListItem()}
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
        width: 80,
        height: 80
    },
    avatarOverlayContainer:{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
};
