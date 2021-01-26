import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const TrackMap = ({ location }) => {
  if(!location) {
    return <ActivityIndicator size='large' style={{ marginTop: 250 }} />;
  }

  return (
    <>
      <Text>Map location here</Text>
      <MapView 
        style={styles.mapStyle}
        initialRegion={
          {
            ...location,
            latitudeDelta: 0.01, 
            longitudeDelta: 0.01
          }
        }
        region={{...location, latitudeDelta: 0.001, longitudeDelta: 0.001}}
      >
        <Circle center={location} radius={40} strokeColor='red' fillColor='rgba(256, 0, 0, 0.3)' />
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