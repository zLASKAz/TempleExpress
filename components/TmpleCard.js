import {StyleSheet, Text, View,Image} from 'react-native';
import React, { Component } from 'react';
import {Button, Icon, Card} from '@rneui/themed';
import Select from '../screen/Select';
class TempleCard extends Component{

     render() {
      return(
        <View style ={{height : 260,width :330,
          backgroundColor : 'white',borderRadius : 10,marginStart: 10,marginEnd:10}}>
              <View style ={{flexDirection:'row'}}>
                  <Image style = {{marginLeft :20,marginTop:20,borderRadius : 10
                  ,paddingTop: 50,width: 100,height: 100}} 
                  source={this.props.ImageUri}/>
                  <View style ={{height:100,width:200}}>
                    <Text style={{marginLeft :20,marginTop:20,fontSize : 18,color:'black',fontWeight:'bold',paddingTop:10}}>{this.props.name}</Text>
                    <Text style={{marginLeft :20,marginRight:20,marginTop:0,fontSize : 12}}>248 Phra Sumen Rd, Wat Bowon Niwet, Phra Nakhon, Bangkok 10200</Text>
                  </View>
              </View>
              <View style ={{marginTop :10,marginBottom:10,marginStart: 20,marginEnd:20,borderRadius:10,flexDirection:'row',backgroundColor : '#ededed'}} >
                <View>
                  <Text style={{marginTop:10,marginLeft :20,fontSize : 15,fontWeight:'bold',color:'black'}}>Delivery Fee</Text>
                  <Text style={{fontSize : 12,marginLeft :20,marginBottom:10}}>35 km.</Text>
                </View> 
                <View style={{position:'absolute',right: 0}}>
                  <Text style={{marginEnd:20,fontSize : 18,padding: 10,fontWeight:'bold',color:'black'}}>${this.props.delivertPrice}</Text>
                </View>
              </View>
              <View >
                  <Button
                  buttonStyle={{borderRadius: 10, marginLeft: 20, marginRight: 20, marginBottom: 25}}
                  title='Choose this Location' 
                  onPress={() => {
                    navigation.navigate('Select');
                  }}
                  />
              </View>
        </View>
      
        
          
        );
    }

}
export default TempleCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontFamily: 'Kanit',
    padding: 20,
    paddingBottom: 0,
    color: '#000',
  },

  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },

});
