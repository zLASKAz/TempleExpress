import React,{ useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";



function getMyLocation(){
  const data = [0,0];
  const [myPos, setMypos] = useState(data);
  if (myPos == data){
    Geolocation.getCurrentPosition(info => setMypos([info.coords.latitude,info.coords.longitude]));
  }
    console.log('My Location')
    console.log(myPos)
  return myPos
}
export default function Map() {
  const myloc = getMyLocation();

  console.log(myloc)
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: myloc[0],
          longitude: myloc[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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