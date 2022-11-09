import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView,{ Marker } from "react-native-maps";
import { SafeAreaView , Image} from "react-native-safe-area-context";


const Map = ()=>{
  return(
  <SafeAreaView style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 14.060567,
          longitude: 100.596508,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
        onRegionChangeComplete={(region) => setRegion(region)}
      >
      <Marker
        coordinate={{ latitude : 14.060567 , longitude : 100.596508 }}
        image = {require("../assets/marker01.png")}
        />
          {/* <Image 
            source ={require("../assets/marker01.png")} 
          />

      </Marker> */}
        
      </MapView>
    </SafeAreaView>
    );
}

export default Map;

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