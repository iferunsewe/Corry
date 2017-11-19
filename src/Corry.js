import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Splash from './components/SplashScreen.js';


export default class Corry extends Component {
    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key="Splash" component={Splash} header={false} initial={true} />
                </Scene>
            </Router>
        );
    }
}
