import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MapView,{ Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../model/dataTemple";
import TempleCard from "../components/TmpleCard";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Searchbar } from 'react-native-paper';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Map = ()=>{
  const dataImport = data
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return(
  <View style={styles.container}>
      
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 14.060567,
          longitude: 100.596508,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        {/* <Marker
          coordinate={{
            latitude: 14.060567,
            longitude: 100.596508
          }}
          
        /> */}

      </MapView>
      <Searchbar style = {{marginLeft :30, marginRight:30,borderRadius:10,marginBottom:300}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style ={{height : 260,marginBottom:50,marginLeft:20,marginRight:20,borderRadius:10}}>
        <ScrollView horizontal = {true}>
          <TempleCard ImageUri ={require('../assets/wat1.jpeg')} 
          name = {dataImport[0].Name}  
          delivertPrice = {dataImport[0].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat2.jpeg')} 
          name = {dataImport[1].Name}  
          delivertPrice = {dataImport[1].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat3.jpeg')} 
          name = {dataImport[2].Name}  
          delivertPrice = {dataImport[2].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat4.jpeg')} 
          name = {dataImport[3].Name}  
          delivertPrice = {dataImport[3].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat5.jpeg')} 
          name = {dataImport[4].Name}  
          delivertPrice = {dataImport[4].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat6.jpeg')} 
          name = {dataImport[5].Name}  
          delivertPrice = {dataImport[5].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat7.jpeg')} 
          name = {dataImport[6].Name}  
          delivertPrice = {dataImport[6].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat8.jpeg')} 
          name = {dataImport[7].Name}  
          delivertPrice = {dataImport[7].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat9.jpeg')} 
          name = {dataImport[8].Name}  
          delivertPrice = {dataImport[8].DeliveryPrice}
          />

          <TempleCard ImageUri ={require('../assets/wat10.jpeg')} 
          name = {dataImport[9].Name}  
          delivertPrice = {dataImport[9].DeliveryPrice}
          />

          
          
        </ScrollView>
      </View>
    </View>
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
  cardText: {
    fontSize : 16,
    padding: 10
  },
  card:{
    backgroundColor : '#fff'

  },
  cardImage:{
    marginLeft :20,
    marginTop:20,
    borderRadius : 10,
    paddingTop: 50,
    width: 100,
    height: 100
  }
});