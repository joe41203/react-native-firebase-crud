import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
export default class Liked extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {[...Array(20)].map((_, i) => {
            return (
              <List key={i}>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail
                      square
                      source={{
                        uri:
                          'https://d1f5hsy4d47upe.cloudfront.net/60/60feaa940647ad2eef651a49a6d2147e_t.jpeg'
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={1}>
                      Its time to build a difference . .
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
            );
          })}
        </Content>
      </Container>
    );
  }
}
