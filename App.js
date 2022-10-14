import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenDetail } from './model/NavModel';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        {ScreenDetail.map((item,i) => {
          console.log(item.name)
          return (
            <Tab.Screen key={i} name={item.name} component={item.component} />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;