import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';
// 参考
// https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs

const BottomTabNavigatorConfig = {
  initialRouteName: 'Profile'
};
const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Profile: { screen: ProfileScreen },
      Setting: { screen: ProfileScreen }
    },
    BottomTabNavigatorConfig
  )
);

export default TabNavigator;
