import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from '../context/AuthContext';

import { SignLink } from '../components/SignLink';
import { SignForm } from '../components/SignForm';

const SignupScreen = ({ navigation }) => {
  const {state, signUp} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SignForm
        formName='Sign Up'
        formBtnName='SIGN UP'
        errMsg={state.errMsg}
        onFormSubmit={(email, password) => signUp({email, password})}
      />
      <SignLink 
        navigateDestination='Signin'
        linkText='Sign in if you already have an account!'
        navigation={navigation}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  signinLinkStyles: {
    color: '#00f',
    fontSize: 15
  }
});

export default SignupScreen;
