import React from 'react';
import { View, StyleSheet } from 'react-native';


export const Space = ({ children }) => {
  return (
    <View style={styles.space}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    margin: 15
  }
});