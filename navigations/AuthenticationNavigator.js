import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';

// 参考
// https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
const AuthenticationNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading: { screen: LoadingScreen },
      SignUp: { screen: SignUpScreen },
      Home: { screen: HomeScreen },
      Login: { screen: LoginScreen }
    },
    {
      initialRouteName: 'Loading'
    }
  )
);

export default AuthenticationNavigator;
