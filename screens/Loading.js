import React from 'react';
import { View } from 'native-base';
import { ActivityIndicator, StyleSheet } from 'react-native';
// 追加
import firebase from 'firebase';

export default class Loading extends React.Component {
  // 追加
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(this.props);
      this.props.navigation.navigate(user ? 'Home' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#0000ff' />
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
