import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from 'native-base';
import firebase from 'firebase';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input
                placeholder='Email'
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item>
              <Input
                placeholder='Password'
                autoCapitalize={'none'}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button block onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
