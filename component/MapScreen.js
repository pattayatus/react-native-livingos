import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import MapView, { Marker } from "react-native-maps";

const CustomMarker = () => (
  <View>
      <Image
    source={require('../img/your-loca.png')}
    style={{weight:30, height:30}}
  />
    <Text></Text>
  </View>
);
export default function MapScreen({ navigation: { navigate } }){
  const [region, setRegion] = useState({
    latitude: 13.6984,
    longitude: 100.4638,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 13.6984, longitude: 100.4638 }}>
        <CustomMarker />
      </Marker>
    </MapView>
  );
};

// export default MapScreen;