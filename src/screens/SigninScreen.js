import React from "react";
import { Text, StyleSheet } from "react-native";
import STYLES from '../styles';
import { SignLink } from '../components/SignLink';

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text style={STYLES.headerTextStyles}>SigninScreen</Text>
      <SignLink 
        navigateDestination='Signup'
        linkText='Sign up if you do not have an account!'
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
