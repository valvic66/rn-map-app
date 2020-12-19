import React from "react";
import { Text, StyleSheet } from "react-native";
import STYLES from '../styles';

const SigninScreen = () => {
  return (
    <>
      <Text style={STYLES.headerTextStyles}>SigninScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Space>
          <Text style={styles.signinLinkStyles}>Sign up if you don't have an account!</Text>
        </Space>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
