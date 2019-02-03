import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';
import AuthenticationNavigator from './navigations/AuthenticationNavigator';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AuthenticationNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
