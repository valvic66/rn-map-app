import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import STYLES from '../styles';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={STYLES.headerTextStyles}>TrackListScreen</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate("TrackDetail")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
