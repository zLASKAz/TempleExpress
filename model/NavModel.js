import HomeScreen from '../screen/HomeScreen';
import Notification from '../screen/Notification';
import Question from '../screen/Question';
import Profile from '../screen/Profile';
import Select from '../screen/Select';
import AskAdmin from '../screen/AskAdmin';
import SignIn from '../components/SignIn';
import ConfirmOrder from '../screen/ConfirmOrder';
import PaymentPage from '../screen/PaymentPage';
import Donated from '../components/Donated';
import MonksOffering from '../components/MonksOffering';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Offering from '../screen/Offering';
import AddOffering from '../screen/AddOffering';
export const ScreenDetail = [
    {
        name: 'Home',
        component: SignIn,
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
        component: Profile,
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

const HomeStack = createNativeStackNavigator();
const OfferingStack = createNativeStackNavigator();


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
            <OfferingStack.Screen name="Payment" component={PaymentPage} options={{ headerShown: false }} />
        </OfferingStack.Navigator>
    );
}