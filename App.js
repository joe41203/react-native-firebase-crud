import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';
import AuthenticationNavigator from './navigations/AuthenticationNavigator';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AuthenticationNavigator />;
  }
}
