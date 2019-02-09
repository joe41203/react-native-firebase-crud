import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Text,
  Content,
  Button,
  Icon
} from 'native-base';

export default class Profile extends Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => console.log('sign out success'))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Text>yuji_kinjo</Text>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='refresh' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
