import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { requestPermissionsAsync } from 'expo-location';

const TrackMap = () => {
  const [error, setError] = useState('');

  const points = [
    { latitude: 44.1905, longitude: 28.6310 },
    { latitude: 44.2905, longitude: 28.7310 }
  ];

  const startRecording = async () => {
    try {
      const permission = await requestPermissionsAsync();
      if(!permission) {
        setError('permission denied!');
      }
    } catch(err) {
      console.log(err);
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
        initialRegion={{
          latitude: 44.1905,
          longitude: 28.6310,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Polyline coordinates={points} />
      </MapView>
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