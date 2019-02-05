import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import firebase from 'firebase';

export default class Home extends React.Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => console.log('sign out success'))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button full danger onPress={this.handleSignOut}>
          <Text>Sign Out</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
});
