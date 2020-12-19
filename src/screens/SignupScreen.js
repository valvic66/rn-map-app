import React, { useState } from "react";
import { StyleSheet, Button, View, TouchableOpacity } from "react-native";
import { Input, Text } from "react-native-elements";
import { Space } from '../utils/Space';
import { Context as AuthContext } from '../context/AuthContext';
import { SignLink } from '../components/SignLink';

const SignupScreen = ({ navigation }) => {
  const {state, signUp} = React.useContext(AuthContext);
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
        <Button title="Sign Up" onPress={() => signUp({email, password})} />
      </Space>
      {state.errMsg ? <Text style={styles.errMsgStyles}>{state.errMsg}</Text> : null}
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
    marginBottom: 300
  },
  errMsgStyles: {
    color: '#f00',
    fontSize: 15,
    marginLeft: 15
  },
  signinLinkStyles: {
    color: '#00f',
    fontSize: 15
  }
});

export default SignupScreen;
