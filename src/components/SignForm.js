import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Input, Text } from "react-native-elements";
import { Space } from '../utils/Space';

export const SignForm = (
  { 
    formName,
    formBtnName,
    errMsg,
    onFormSubmit
  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
        <Space>
          <Text h4>{formName}</Text>
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
          <Button 
            title={formBtnName} 
            onPress={() => onFormSubmit(email, password)}
          />
        </Space>
        {errMsg ? <Text style={styles.errMsgStyles}>{errMsg}</Text> : null}
      </> 
    );
};

const styles = StyleSheet.create({
  errMsgStyles: {
    color: '#f00',
    fontSize: 15,
    marginLeft: 15
  }
});