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
import { View } from 'react-native';
import firebase from 'firebase';
import FacebookConfig from '../config/facebook';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      .catch(error => {
        console.log(error);
        alert('不正なメールアドレスまたはパスワードです');
      });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error.message);
        alert('ログイン情報を正しく入力してください');
      });
  };

  // 追加
  handleFBLogin = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      FacebookConfig.ApplicationKey,
      { permissions: ['public_profile'] }
    );
    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(user => {
          console.log('connected to firebase');
        })
        .catch(error => {
          console.error(error);
        });
    }
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
            <View style={{ padding: 10 }}>
              <Button full success onPress={this.handleSignUp}>
                <Text>SignUp</Text>
              </Button>
            </View>
            <View style={{ padding: 10 }}>
              <Button full success onPress={this.handleLogin}>
                <Text>Login</Text>
              </Button>
            </View>
            <View style={{ padding: 10 }}>
              <Button full onPress={this.handleFBLogin}>
                <Text>Facebook Login</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
