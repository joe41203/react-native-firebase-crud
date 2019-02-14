import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Container,
  Header,
  Right,
  Left,
  Text,
  Content,
  Button,
  Icon,
  Thumbnail,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, Dimensions } from 'react-native';
import Lightbox from 'react-native-lightbox';

export default class Profile extends Component {
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => console.log('sign out success'))
      .catch(error => console.error(error));
  };

  render() {
    const { width } = Dimensions.get('window');

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
        <Content>
          <Grid>
            <Col size={75} style={{ margin: 20 }}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}
              >
                Yuji Kinjo
              </Text>
              <Text>
                The Icon Buttons, can take text and/or icon as child elements
                inside the Button. This goes as simple as this
              </Text>
            </Col>
            <Col size={25} style={{ margin: 20 }}>
              <Thumbnail
                large
                source={{
                  uri:
                    'https://d1f5hsy4d47upe.cloudfront.net/60/60feaa940647ad2eef651a49a6d2147e_t.jpeg'
                }}
              />
            </Col>
          </Grid>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Icon name='grid' />
                </TabHeading>
              }
            />
            <Tab
              heading={
                <TabHeading>
                  <Icon name='keypad' />
                </TabHeading>
              }
            />
            <Tab
              heading={
                <TabHeading>
                  <Icon name='person' />
                </TabHeading>
              }
            />
          </Tabs>
          <Grid>
            {[...Array(10)].map((_, i) => {
              return (
                <Row key={i}>
                  <Col
                    style={{
                      width: width / 3,
                      margin: 1
                    }}
                  >
                    <Lightbox>
                      <Image
                        style={{ height: width / 3, flex: 1 }}
                        resizeMode='contain'
                        source={{
                          uri:
                            'https://bootdey.com/img/Content/avatar/avatar3.png'
                        }}
                      />
                    </Lightbox>
                  </Col>
                  <Col
                    style={{
                      width: width / 3,
                      margin: 1
                    }}
                  >
                    <Lightbox>
                      <Image
                        style={{ height: width / 3, flex: 1 }}
                        resizeMode='contain'
                        source={{
                          uri:
                            'https://bootdey.com/img/Content/avatar/avatar2.png'
                        }}
                      />
                    </Lightbox>
                  </Col>
                  <Col
                    style={{
                      width: width / 3,
                      margin: 1
                    }}
                  >
                    <Lightbox>
                      <Image
                        style={{ height: width / 3, flex: 1 }}
                        resizeMode='contain'
                        source={{
                          uri:
                            'https://bootdey.com/img/Content/avatar/avatar1.png'
                        }}
                      />
                    </Lightbox>
                  </Col>
                </Row>
              );
            })}
          </Grid>
        </Content>
      </Container>
    );
  }
}
