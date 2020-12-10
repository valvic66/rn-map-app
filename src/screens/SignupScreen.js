import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { Input, Text } from "react-native-elements";
import { Space } from '../utils/Space';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Space>
        <Text h4>Sign Up</Text>
      </Space>
      <Input 
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input 
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Space>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
      </Space>
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
    marginBottom: 300
  }
});

export default SignupScreen;
