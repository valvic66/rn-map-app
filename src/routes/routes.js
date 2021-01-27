import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";
import AccountScreen from "../screens/AccountScreen";
import EmptyScreen from '../screens/EmptyScreen';

const ROUTES = Object.freeze({
  loginRoutes: {
    Signup: SignupScreen,
    Signin: SigninScreen
  },
  trackRoutes: {
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
  },
  mainRoutes: {
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  }
});

export default switchNavigator = createSwitchNavigator({
  AuthScreen: EmptyScreen,
  login: createStackNavigator(ROUTES.loginRoutes),
  main: createBottomTabNavigator({
    tracks: createStackNavigator(ROUTES.trackRoutes),
    ...ROUTES.mainRoutes
  })
});

