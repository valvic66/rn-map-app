import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Space } from '../utils/Space';

export const SignLink = ({ navigateDestination, linkText, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateDestination)}>
      <Space>
        <Text style={styles.signinLinkStyles}>{linkText}</Text>
      </Space>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signinLinkStyles: {
    color: '#00f',
    fontSize: 15
  }
});