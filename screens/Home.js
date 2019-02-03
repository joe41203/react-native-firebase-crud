import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class Home extends React.Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => alert('sign out success'))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleSignOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
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
