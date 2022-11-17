import * as React from 'react';
import { View, Text, } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenDetail } from './model/NavModel';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#B35304',
    },
  };
  return (
    <NavigationContainer theme={navTheme} >
      <Tab.Navigator screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: "#EC8948",
        tabBarInactiveTintColor: "rgba(236, 137, 72,0.4)",
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 5,
          fontWeight: "bold"
        },
        tabBarStyle: {
          headerShown: false,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          left: 15,
          right: 15,
          bottom: 10,
          borderRadius: 15,
          height: 60,
          elevation: 2,
          paddingBottom: 1,
          borderTopWidth: 0
        }
}}>
        {ScreenDetail.map((item,i) => {
          console.log(item.name)
          return (
            <Tab.Screen key={i} name={item.name} component={item.component} 
              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({ color, size }) => (
                  <Icon name={item.icon} type={item.icontype} size={25} color={color} />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;