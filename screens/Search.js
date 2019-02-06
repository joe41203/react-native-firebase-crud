import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Input,
  Item,
  Icon
} from 'native-base';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header searchBar>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' />
          </Item>
        </Header>
        <Content>
          <Text>HelloWorld</Text>
        </Content>
      </Container>
    );
  }
}
