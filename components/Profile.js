import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Profile extends React.Component {
  static navigationOptions = {
    headerTitle: 'Profile',
    tabBarIcon: <Icon name="ios-person" size={26} color="#387038" />
  }
  
  render() {
    const fullName = firebase.auth().currentUser.displayName
    const image = firebase.auth().currentUser.photoURL
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome, {fullName}!</Text>
        <Image
          style={styles.image}
          source={{uri: image}} />
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderColor: '#B2D99E',
    borderWidth: 2,
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 30,
    color: '#B2D99E',
    paddingBottom: 20
  }
})

