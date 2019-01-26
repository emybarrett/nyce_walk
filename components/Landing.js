import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase'

export default class Landing extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  componentDidMount() {
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Profile')
      } else {
        this.props.navigation.navigate('Landing')
      }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>nyce walk</Text>
        <Button style={styles.button} fontSize={30} title="Login or Sign up with Google" onPress={() => this.props.navigation.navigate('Login')} />
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
  text: {
    fontFamily: 'Avenir',
    fontSize: 50,
    color: '#B2D99E'
  },
  button: {
    color: '#B2D99E',
    fontSize: 18,
    fontFamily: 'Avenir',
  }
});
