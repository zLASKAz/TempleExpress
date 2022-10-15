import { StyleSheet, Button, SafeAreaView, Text} from 'react-native';
import SignInCard from '../components/SignIn'

export default function Notification() {
  return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SignInCard/>
      </SafeAreaView>
  );
}