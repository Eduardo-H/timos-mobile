import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}