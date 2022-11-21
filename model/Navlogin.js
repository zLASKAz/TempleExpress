import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../components/ValidateSignIn';
import SignUp from '../components/SignUpRedo';

const Stack = createNativeStackNavigator();

const Navlogin = () => {
    return (

        <Stack.Navigator initialRouteName="validateSignIn">
            <Stack.Screen name="validateSignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpRedo" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

};

export default Navlogin;