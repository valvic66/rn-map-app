import React from "react";
import { createAppContainer } from 'react-navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';
import switchNavigator from './src/routes/routes';
import { setNavigator } from './src/utils/navigationRef';

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};