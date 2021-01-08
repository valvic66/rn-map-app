import React from "react";
import { Text, StyleSheet } from "react-native";
import STYLES from '../styles';
import { SafeAreaView } from 'react-navigation';
import TrackMap from '../components/TrackMap';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={STYLES.headerTextStyles}>TrackCreateScreen</Text>
      <TrackMap />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
