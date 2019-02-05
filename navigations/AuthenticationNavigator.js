import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import TabNavigator from '../navigations/TabNavigator';
import LoadingScreen from '../screens/Loading';
import SignUpScreen from '../screens/SignUp';

// 参考
// https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
const AuthenticationNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading: { screen: LoadingScreen },
      SignUp: { screen: SignUpScreen },
      Home: { screen: TabNavigator }
    },
    {
      initialRouteName: 'Loading'
    }
  )
);

export default AuthenticationNavigator;
