import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    height: '88%',
    position: 'relative',
  },
});

const Map = () => {
  return (
    <>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <MapView.Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title={'Title 1'}
        description={'Description 1'}
      />
      <MapView.Marker
        coordinate={{
          latitude: 37.78925,
          longitude: -122.4324,
        }}
        title={'Title 2'}
        description={'Description 2'}
      />
    </>
  );
};
export default Map;
