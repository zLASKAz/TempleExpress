import HomeScreen from '../screen/HomeScreen';
import Notification from '../screen/Notification';
import Question from '../screen/Question';
import Profile from '../screen/Profile';
import Select from '../screen/Select';
import AskAdmin from '../screen/AskAdmin';
import SignIn from '../components/ValidateSignIn';
import ConfirmOrder from '../screen/ConfirmOrder';
import Payment from '../screen/Payment'
import SignUp from '../components/SignUpRedo';
import Map from '../screen/Map'

import Donated from '../components/Donated';
import MonksOffering from '../components/MonksOffering';
import { RandomLuckResult } from '../screen/Fortune';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Offering from '../screen/Offering';
import AddOffering from '../screen/AddOffering';
export const ScreenDetail = [
    {
        name: 'Home',
        component: Map,
        icon: 'home',
        icontype: 'material-community',

    },
    {
        name: 'Notification',
        component: Notification,
        icon: 'bell-outline',
        icontype: 'material-community',

    },
    {
        name: 'Q&A',
        component: Question,
        icon: 'help',
        icontype: 'material-community',

    },
    {
        name: 'AskAdmin',
        component: AskAdmin,
        icon: 'account-tie-hat',
        icontype: 'material-community',

    },
    {
        name: 'Profile',
        component: ProfileStackScreen,
        icon: 'account',
        icontype: 'material-community',

    },
    {
        name: 'Select',
        component: HomeStackScreen,
        icon: 'help',
        icontype: 'material-community',

    },
    {
        name: 'Offering',
        component: OfferingStackScreen,
        icon: 'help',
        icontype: 'material-community',
    },
]

export const LoginDetail = [
    {
        name: 'Login',
        component: SignInStackScreen,
    },
]

const HomeStack = createNativeStackNavigator();
const OfferingStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SignInScreen = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="select" component={Select} options={{ headerShown: false }} />
            <HomeStack.Screen name="Donated" component={Donated} options={{ headerShown: false }} />
            <HomeStack.Screen name="MonksOffering" component={MonksOffering} options={{ headerShown: false }} />
            <OfferingStack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

function OfferingStackScreen() {
    return (
        <OfferingStack.Navigator>
            <OfferingStack.Screen name="offering" component={Offering} options={{ headerShown: false }} />
            <OfferingStack.Screen name="AddOffering" component={AddOffering} options={{ headerShown: false }} />
            <OfferingStack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{ headerShown: false }} />
            <OfferingStack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
        </OfferingStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Fortune" component={RandomLuckResult} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}

function SignInStackScreen() {
    return (
        <SignInScreen.Navigator>
            <SignInScreen.Screen name="validateSignIn" component={SignIn} options={{ headerShown: false }} />
            <SignInScreen.Screen name="SignUpRedo" component={SignUp} options={{ headerShown: false }} />
        </SignInScreen.Navigator>
    );
}