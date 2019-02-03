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
// 追加
import { TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleSignUp = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.props.navigation.navigate('Home');
      })
      .catch(error => alert(error));
  };

  // 追加
  handleShowLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input
                placeholder='Username'
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={username => this.setState({ username })}
              />
            </Item>
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
            <Button full onPress={this.handleSignUp}>
              <Text>SignUp</Text>
            </Button>
            {/* 追加 */}
            <TouchableOpacity onPress={this.handleShowLogin}>
              <Text>Sign In</Text>
            </TouchableOpacity>
            {/* ここまで */}
          </Form>
        </Content>
      </Container>
    );
  }
}
