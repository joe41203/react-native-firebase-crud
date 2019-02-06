import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';
import SearchScreen from '../screens/Search';
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
      Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' color={tintColor} size={24} />
          )
        })
      },
      Adding: {
        screen: () => null,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='plus' color={tintColor} size={24} />
          )
        })
      },
      Setting: {
        screen: SettingScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='lock' color={tintColor} size={24} />
          )
        })
      },
      Search: {
        screen: SearchScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='bookmark' color={tintColor} size={24} />
          )
        })
      }
    },
    BottomTabNavigatorConfig
  )
);

export default TabNavigator;
