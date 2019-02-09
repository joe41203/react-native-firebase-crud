import React, { Component } from 'react';
import { Container, Header, Content, Body, Title } from 'native-base';
import { RefreshControl } from 'react-native';
import PostedCard from '../containers/PostedCard';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
          {[...Array(5)].map((_, i) => (
            <PostedCard key={i} />
          ))}
        </Content>
      </Container>
    );
  }
}
