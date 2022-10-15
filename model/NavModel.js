import HomeScreen from '../screen/HomeScreen';
import Notification from '../screen/Notification';
import Question from '../components/Question';
import Profile from '../screen/Profile';
import AskAdmin from '../screen/AskAdmin';
import SignIn from '../components/SignIn';
import ConfirmOrder from '../screen/ConfirmOrder';
import Payment from '../screen/Payment'

export const ScreenDetail = [
    {
        name: 'Home',
        component: ConfirmOrder,
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

]