import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import STYLES from '../styles';
import { SafeAreaView } from 'react-navigation';
import TrackMap from '../components/TrackMap';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      const permission = await requestPermissionsAsync();
      if(!permission) {
        setError('permission denied!');
      }
      await watchPositionAsync({
        accuracy: Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 10
      },
      location => {
        addLocation(location.coords);
      });
      
    } catch(err) {
      console.err(err);
    }
  };

  useEffect(() => {
    startRecording();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={STYLES.headerTextStyles}>TrackCreateScreen</Text>
      <TrackMap location={state.currentLocation} />
      {error ? <Text>error</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
