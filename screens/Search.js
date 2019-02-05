import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, likes: 12, image: 'https://lorempixel.com/400/200/nature/6/' },
        { id: 2, likes: 11, image: 'https://lorempixel.com/400/200/nature/5/' },
        { id: 3, likes: 25, image: 'https://lorempixel.com/400/200/nature/4/' },
        { id: 4, likes: 12, image: 'https://lorempixel.com/400/200/nature/6/' },
        { id: 5, likes: 10, image: 'https://lorempixel.com/400/200/sports/1/' },
        { id: 6, likes: 12, image: 'https://lorempixel.com/400/200/nature/8/' },
        { id: 7, likes: 34, image: 'https://lorempixel.com/400/200/nature/1/' },
        { id: 8, likes: 45, image: 'https://lorempixel.com/400/200/nature/3/' },
        { id: 9, likes: 32, image: 'https://lorempixel.com/400/200/nature/4/' },
        { id: 9, likes: 56, image: 'https://lorempixel.com/400/200/nature/5/' }
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity
                        style={styles.socialBarButton}
                        onPress={() => this.addProductToCart()}
                      >
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              'https://png.icons8.com/flat_round/50/000000/share.png'
                          }}
                        />
                        <Text style={[styles.socialBarLabel, styles.share]}>
                          Share
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              'https://png.icons8.com/color/50/000000/hearts.png'
                          }}
                        />
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff'
  },
  list: {
    paddingHorizontal: 5
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null
  },
  /******** card components **************/
  share: {
    color: '#25b7d3'
  },
  icon: {
    width: 25,
    height: 25
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
