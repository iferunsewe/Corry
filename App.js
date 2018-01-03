import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SplashScreen from './src/components/SplashScreen'
import DecisionScreen from './src/components/DecisionScreen'
import BuyerScreen from './src/components/buyer/BuyerScreen'
import TravellerScreen from './src/components/traveller/TravellerScreen'
import AuthenticationScreen from './src/components/authentication/AuthenticationScreen'
import ChooseTravellerScreen from './src/components/buyer/ChooseTravellerScreen'
import PostRequestScreen from './src/components/buyer/PostRequestScreen'
import ChooseRequestScreen from './src/components/traveller/ChooseRequestScreen'
import PostFlightScreen from './src/components/traveller/PostFlightScreen'
import NavBar from './src/components/NavBar'


export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="splash" component={SplashScreen}/>
            <Scene key="decision" component={DecisionScreen} />
            <Scene key="buyer" component={BuyerScreen} navBar={NavBar} />
            <Scene key="traveller" component={TravellerScreen} navBar={NavBar} />
            <Scene key="authentication" component={AuthenticationScreen} navBar={NavBar} />
            <Scene key="chooseTraveller" component={ChooseTravellerScreen} navBar={NavBar}/>
            <Scene key="postRequest" component={PostRequestScreen} navBar={NavBar} />
            <Scene key="chooseRequest" component={ChooseRequestScreen} navBar={NavBar} />
            <Scene key="postFlight" component={PostFlightScreen} navBar={NavBar} initial={true}/>
          </Scene>
        </Router>
    );
  }
}