import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Space } from '../utils/Space';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.headerTextStyle}>AccountScreen</Text>
      <Space>
        <Button title='SIGN OUT' onPress={signOut} />
      </Space>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default AccountScreen;
