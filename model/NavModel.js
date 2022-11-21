import HomeScreen from '../screen/HomeScreen';
import Notification from '../screen/Notification';
import Question from '../components/Question';
import Profile from '../screen/Profile';
import Select from '../screen/Select';
import AskAdmin from '../screen/AskAdmin';
import SignIn from '../components/SignIn';
import ConfirmOrder from '../screen/ConfirmOrder';
import Payment from '../screen/Payment'
import Map from '../screen/Map';
import Donated from '../components/Donated';
import MonksOffering from '../components/MonksOffering';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maps from '../screen/Map';

export const ScreenDetail = [
    {
        name: 'Home',
        component: Maps,
        Icon: '',
    },
    {
        name: 'Notification',
        component: Payment,
        Icon: '',

    },
    {
        name: 'Q&A',
        component: SignIn,
        Icon: '',

    },
    {
        name: 'AskAdmin',
        component: AskAdmin,
        Icon: '',

    },
    {
        name: 'Profile',
        component: Profile,
        Icon: '',

    },
    {
        name: 'Select',
        component: HomeStackScreen,
        Icon: '',

    },

]

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="select" component={Select} options={{ headerShown: false }} />
            <HomeStack.Screen name="Donated" component={Donated} options={{ headerShown: false }} />
            <HomeStack.Screen name="MonksOffering" component={MonksOffering} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}