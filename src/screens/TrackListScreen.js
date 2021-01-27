import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import STYLES from '../styles';
import { SafeAreaView } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={STYLES.headerTextStyles}>TrackListScreen</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate("TrackDetail")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
