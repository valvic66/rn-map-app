import React from "react";
import { createAppContainer } from 'react-navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import switchNavigator from './src/routes/routes';
import { setNavigator } from './src/utils/navigationRef';

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
    </LocationProvider>
  );
};