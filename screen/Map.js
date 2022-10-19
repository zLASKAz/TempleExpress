import React, {useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  lattitude: 40.76711,
  longitude: -73.979704,
  lattitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default function App() {
  const [check1, setCheck1] = useState(false);
  Geolocation.getCurrentPosition(info => setCheck1(info.coords));

  return (
    <View>
      <MapView
      style = {styles.maps}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
  />  
    </View>
  );
}

const styles = StyleSheet.create({
  maps: {
    ...StyleSheet.absoluteFillObject,
  },
});

// export default function Map() {

//   Longdo.apiKey = 'c2b90d53eac048b6be2dcb883bc429e2';
//   let map;
//   let loc = { lon: 100, lat: 20.65 };
//   let home = Longdo.object('Marker', loc, { detail: 'Home' });

//   function onReady() {
//     console.log('ready ' + new Date());
//     map.call('Overlays.load', Longdo.object('Overlays.Object', 'A00146852', 'LONGDO'));
//   }

//   function onOverlayClick(data) {
//     if (Longdo.isSameObject(data, home)) {
//       console.log('At Home');
//     }
//     map.call('Overlays.list').then(console.log);
//   }

//   function onPressTest1() {
//     map.call('Overlays.add', home);
//     map.objectCall(home, 'pop', true);
//     map.call('location', loc);
//   }

//   async function onPressTest2() {
//     let zoom = await map.call('zoom');
//     let location = await map.call('location');
//     alert(location.lon + '\n' + location.lat + '\n' + zoom);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Longdo.MapView
//         ref={r => (map = r)}
//         layer={Longdo.static('Layers', 'GRAY')}
//         zoom={15}
//         zoomRange={{min: 3, max: 16}}
//         location={{lon: check1.longtude, lat: check1.latitude}}
//         // ui={false}
//         lastView={false}
//         // language={'en'}
//         onReady={onReady}
//         onOverlayClick={onOverlayClick}
//       />
//       <Button
//         onPress={onPressTest1}
//         title="Home"
//       />

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 5,
//     backgroundColor: '#fff',
//     // alignItems: 'center', // center not working, use stretch (default value)
//     justifyContent: 'center',
//     paddingTop: Platform.OS === 'android' ? 0 : 0,
//   },
// });
