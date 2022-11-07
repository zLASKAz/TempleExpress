import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";



function getMyLocation(){
  const data = [0,0];
  const [myPos, setMypos] = useState(data);
  if (myPos == data){
    Geolocation.getCurrentPosition(info => setMypos([info.coords.latitude,info.coords.longitude]));
  }
    
  return myPos
}
export default function Map() {
  const mapRef = useRef(null);
  const [latitude, setMylatitude] = useState(null);
  const [longitude, setMylongitude] = useState(null);

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const tokyoRegion = {
    latitude: latitude,
    longitude: longitude,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
  const goTolocation = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };

  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };

  const [position, setPosition] = useState(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(JSON.stringify(pos));
        console.log(position);
        setMylatitude(pos.coords.latitude);
        setMylongitude(pos.coords.longitude);
        console.log(latitude);
        console.log(longitude);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  const myloc = getMyLocation();

  console.log(myloc)
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 14.060567,
          longitude: 100.596508,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      <Button onPress={() => goTolocation()} title="Go to Tokyo" />
      <Button title="Get Current Position" onPress={getCurrentPosition} />
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});