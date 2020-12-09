import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Input label="Email" onChangeText={value => console.log(value)} />
      <Input label="Password" onChangeText={value => console.log(value)} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SignupScreen;
