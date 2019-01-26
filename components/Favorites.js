import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Favorites extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
    tabBarIcon: <Icon name="ios-heart-empty" size={24} color="#387038" />
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>You don't have any favorites yet!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
