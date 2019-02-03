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

    // firebaseでSignUp
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ username: '', email: '', password: '' });
        alert('success');
        // 登録後のページへ遷移させる
      })
      .catch(error => alert(error));
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
            <Button block onPress={this.handleSignUp}>
              <Text>SignUp</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
