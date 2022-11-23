import React from "react";
import { StyleSheet, Text, View, ScrollView ,Image} from "react-native";
import MapView,{ Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../model/dataTemple";
import TempleCard from "../components/TmpleCard";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Searchbar } from 'react-native-paper';
import {Button, Icon, Card} from '@rneui/themed';

const marker = require('../assets/marker01.png')

import ListMarker from '../components/ListMarker'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Map({ navigation }) {

  const dataImport = data
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const myLoc =[14.060567,100.596508]
  const selectedRegion = {
    latitude: 100,
    longitude: 100,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goTolocation = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(selectedRegion, 3 * 1000);

  };
  var markers = [
    {
      latitude: 14.060178,
      longitude: 100.590133,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];
  return(

  <View style={styles.container} navigation={navigation} >
      
      <MapView 
        style={styles.map}
        region={{
          latitude: myLoc[0],
          longitude: myLoc[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
        >
      </MapView>
      
      <Searchbar style = {{width: 350,borderRadius:10,marginTop:20,
        }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={{ height: 260, width: 370,marginBottom:90,borderRadius:10,}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* <TempleCard ImageUri ={require('../assets/wat1.jpeg')} 
          name = {dataImport[0].Name}  
          delivertPrice = {dataImport[0].DeliveryPrice}
          onPress={() => {
            console.log('press')
            navigation.navigate('Select');
          }}
          >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 50}}
                  title='Choose this Location' 
                  
                  />
            </TempleCard>
          

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
          /> */}
        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat1.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[0].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[0].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[0].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName:  dataImport[0].Name  });
                  }}
                  />
              </View>

              <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat2.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[1].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[1].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[1].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[1].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat3.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[2].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[2].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[2].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[2].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat4.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[3].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[3].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[3].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[3].Name });
                  }}
                  />
              </View>
        </View>


        </View>
        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat5.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[4].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[4].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[4].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[4].Name });
                  }}
                  />
              </View>
        </View>
          
        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat6.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[5].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[5].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[5].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[5].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat7.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[6].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[6].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[6].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[6].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat8.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[7].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[7].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[7].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[7].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat9.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[8].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[8].km} km..</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[8].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[8].Name });
                  }}
                  />
              </View>
        </View>

        <View style ={{height : 260,width :350,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={require('../assets/wat10.jpeg')}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{dataImport[9].Name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>{dataImport[9].km} km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${dataImport[9].DeliveryPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select', { templeName: dataImport[9].Name });
                  }}
                  />
              </View>
        </View>

        </ScrollView>
      </View>
    </View>
    );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    alignItems: "center",
    justifyContent: "space-between",
    position:'absolute',
    width:'100%'
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