import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { Font, AppLoading } from 'expo';
import SplashScreen from './src/components/SplashScreen'
import DecisionScreen from './src/components/DecisionScreen'
import BuyerScreen from './src/components/buyer/BuyerScreen'
import TravellerScreen from './src/components/traveller/TravellerScreen'
import RegisterScreen from './src/components/authentication/RegisterScreen'
import LoginScreen from './src/components/authentication/LoginScreen'
import ChooseTravellerScreen from './src/components/buyer/ChooseTravellerScreen'
import PostRequestScreen from './src/components/buyer/PostRequestScreen'
import BuyerInfoScreen from './src/components/buyer/BuyerInfoScreen'
import ChooseRequestScreen from './src/components/traveller/ChooseRequestScreen'
import PostFlightScreen from './src/components/traveller/PostFlightScreen'
import NavBar from './src/components/NavBar'
import SplashScreenNavBar from './src/components/SplashScreenNavBar'
import ProfileScreen from './src/components/profile/ProfileScreen'
import ExchangeDetails from './src/components/ExchangeDetailsScreen'
import { FormattedWrapper} from 'react-native-globalize';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'myriad-pro-regular': require('./assets/fonts/MyriadProRegular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />
    }
    return (
        <FormattedWrapper locale="en">
          <Router>
            <Scene key="root">
              <Scene key="splash" component={SplashScreen} navBar={SplashScreenNavBar} />
              <Scene key="decision" component={DecisionScreen} navBar={NavBar} />
              <Scene key="buyer" component={BuyerScreen} navBar={NavBar} />
              <Scene key="traveller" component={TravellerScreen} navBar={NavBar} />
              <Scene key="registration" component={RegisterScreen} navBar={NavBar} />
              <Scene key="login" component={LoginScreen} navBar={NavBar} />
              <Scene key="chooseTraveller" component={ChooseTravellerScreen} navBar={NavBar} />
              <Scene key="postRequest" component={PostRequestScreen} navBar={NavBar} />
              <Scene key="buyerInfoScreen" component={BuyerInfoScreen} navBar={NavBar} initial={true}/>
              <Scene key="chooseRequest" component={ChooseRequestScreen} navBar={NavBar} />
              <Scene key="postFlight" component={PostFlightScreen} navBar={NavBar} />
              <Scene key="profile" component={ProfileScreen} navBar={NavBar} />
              <Scene key="exchangeDetails" component={ExchangeDetails} navBar={NavBar} />
            </Scene>
          </Router>
        </FormattedWrapper>
    );
  }
}
