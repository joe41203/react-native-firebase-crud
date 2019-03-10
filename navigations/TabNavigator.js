import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import LikedScreen from '../screens/Liked';
import PictureScreen from '../screens/Picture';
import Icon from '@expo/vector-icons/FontAwesome';

// 参考
// https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs

const BottomTabNavigatorConfig = {
  initialRouteName: 'Home',
  tabBarOptions: { showLabel: false }
};

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} size={24} />
          )
        })
      },
      Search: {
        screen: SearchScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='search' color={tintColor} size={24} />
          )
        })
      },
      Adding: {
        screen: PictureScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='plus' color={tintColor} size={24} />
          )
        })
      },
      Likeed: {
        screen: LikedScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' color={tintColor} size={24} />
          )
        })
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='user' color={tintColor} size={24} />
          )
        })
      }
    },
    BottomTabNavigatorConfig
  )
);

export default TabNavigator;
