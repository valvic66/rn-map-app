import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import {
  loginRoutes,
  trackRoutes,
  mainRoutes
} from './src/routes/routes';

const switchNavigator = createSwitchNavigator({
  login: createStackNavigator(loginRoutes),
  main: createBottomTabNavigator({
    ...mainRoutes,
    tracks: createStackNavigator(trackRoutes),
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};