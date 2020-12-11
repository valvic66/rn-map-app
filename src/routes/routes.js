import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";
import AccountScreen from "../screens/AccountScreen";

export const loginRoutes = Object.freeze({
  Signup: SignupScreen,
  Signin: SigninScreen
});

export const trackRoutes = Object.freeze({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

export const mainRoutes = Object.freeze({
  Account: AccountScreen,
  TrackCreate: TrackCreateScreen
});

