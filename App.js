import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
firebase.initializeApp(firebaseConfig)

import Landing from './components/Landing'
import Profile from './components/Profile'
import Map from './components/Map'
import Login from './components/Login'
import Favorites from './components/Favorites'

const DashboardTabNavigator = createBottomTabNavigator({ Profile, Favorites, Map })
const DashboardSwitchNavigator = createSwitchNavigator({ DashboardTabNavigator })
const AppStackNavigator = createStackNavigator({ Landing, Login, DashboardSwitchNavigator })
const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
