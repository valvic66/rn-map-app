import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SignLink } from '../components/SignLink';
import { SignForm } from '../components/SignForm';
import { Context as AuthContext } from '../context/AuthContext';


const SigninScreen = ({ navigation }) => {
  const {state, signIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SignForm
        formName='Sign In'
        formBtnName='SIGN IN'
        errMsg={state.errMsg}
        onFormSubmit={(email, password) => signIn({email, password})}
      />
      <SignLink 
        navigateDestination='Signup'
        linkText='Sign up if you do not have an account!'
        navigation={navigation}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
