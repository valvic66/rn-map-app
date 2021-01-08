import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const TrackMap = () => {
  const points = [
    { latitude: 44.1905, longitude: 28.6310 },
    { latitude: 44.2905, longitude: 28.7310 },
  ];
  
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
    </>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 350
  }
});

export default TrackMap;