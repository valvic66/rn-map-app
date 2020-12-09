import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate("TrackDetail")} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TrackListScreen;
