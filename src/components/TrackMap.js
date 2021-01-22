import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';


const TrackMap = () => {
  const { state, addLocation } = useContext(LocationContext);
  const [error, setError] = useState('');

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
        addLocation(location);
      });
      
    } catch(err) {
      console.err(err);
    }
  };

  useEffect(() => {
    startRecording();
  }, []);
  
  return (
    <>
      <Text>Map location here</Text>
      <MapView 
        style={styles.mapStyle}
        initialRegion={state.location}
      />
      {error ? <Text>error</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 350
  }
});

export default TrackMap;