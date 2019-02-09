import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Icon } from 'native-base';
import { Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width } = Dimensions.get('window');
    const datas = [
      { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
      { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
      { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
      { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
      { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
      { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
      { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
      { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
      { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
      { id: 10, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' }
    ];

    return (
      <Container>
        <Header searchBar>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' />
          </Item>
        </Header>
        <Content>
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
                    <Image
                      style={{ height: width / 3, flex: 1 }}
                      source={{
                        uri:
                          'https://bootdey.com/img/Content/avatar/avatar3.png'
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      width: width / 3,
                      margin: 1
                    }}
                  >
                    <Image
                      style={{ height: width / 3, flex: 1 }}
                      source={{
                        uri:
                          'https://bootdey.com/img/Content/avatar/avatar2.png'
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      width: width / 3,
                      margin: 1
                    }}
                  >
                    <Image
                      style={{ height: width / 3, flex: 1 }}
                      source={{
                        uri:
                          'https://bootdey.com/img/Content/avatar/avatar4.png'
                      }}
                    />
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
