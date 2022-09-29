import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="home" component={Home} options={{ gestureEnabled: false }} />
    </Navigator>
  )
}