import React, {Component} from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import MapView, {PROVIDER_GOOGLE, Callout, Marker} from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Map extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: <Icon name="ios-globe" size={24} color="#387038" />
  }

  constructor() {
    super()
    this.state = {
      trees: [],
      isLoading: true,
      region: null, 
    }
  }

  async componentDidMount() {
    try {
      let res = await fetch(`https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$$app_token=Sc0d0IRQEH6E7V1nbYr5H6ZP7`)
      let resJson = await res.json()
      this.setState({
        isLoading: false,
        trees: resJson
      })
    } catch (err) {
      console.error(err)
    }
  }

  //if loading, show load screen
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading :)</Text>
          <ActivityIndicator />
        </View>
      )
    }
    //otherwise, return the mapview
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 40.7128,
            longitude: -74.0060,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChangeComplete={(region) => {
            this.setState({ region })
          }}
        >
          {
            this.state.trees.map(tree => (
              <Marker
                coordinate={{
                  latitude: Number(tree.latitude),
                  longitude: Number(tree.longitude),
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                }}
                title={tree.spc_common}
                decscription="tree"
                image={require('../assets/images/tree.png')}
                key={tree.tree_id}
              >
                <Callout style={styles.callout}>
                  <Text style={styles.text}>
                    Common Name: {tree.spc_common}
                  </Text>
                  <Text style={styles.text}>
                    Scientific Name: {tree.spc_latin}
                  </Text>
                </Callout>
              </Marker>
            ))
          }
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  text: {
    fontSize: 12
  }
})
