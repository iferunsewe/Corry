import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SplashScreen from './src/components/SplashScreen'
import DecisionScreen from './src/components/DecisionScreen'
import BuyerScreen from './src/components/buyer/BuyerScreen'
import TravellerScreen from './src/components/traveller/TravellerScreen'
import AuthenticationScreen from './src/components/authentication/AuthenticationScreen'
import ChooseTravellerScreen from './src/components/buyer/ChooseTravellerScreen'
import PostRequestScreen from './src/components/buyer/PostRequestScreen'
import ChooseRequestScreen from './src/components/traveller/TravellerScreen'
import PostFlightScreen from './src/components/traveller/PostFlightScreen'


export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="splash" component={SplashScreen} />
            <Scene key="decision" component={DecisionScreen} initial={true}/>
            <Scene key="buyer" component={BuyerScreen} />
            <Scene key="traveller" component={TravellerScreen} />
            <Scene key="authentication" component={AuthenticationScreen} />
            <Scene key="chooseTraveller" component={ChooseTravellerScreen} />
            <Scene key="postRequest" component={PostRequestScreen} />
            <Scene key="chooseRequest" component={ChooseRequestScreen} />
            <Scene key="postFlight" component={PostFlightScreen} />
          </Scene>
        </Router>
    );
  }
}
