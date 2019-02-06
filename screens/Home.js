import React, { Component } from 'react';
import { Container, Header, Content, Body, Title } from 'native-base';
import PostedCard from '../containers/PostedCard';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>
        <Content>
          {[...Array(5)].map((_, i) => (
            <PostedCard key={i} />
          ))}
        </Content>
      </Container>
    );
  }
}
