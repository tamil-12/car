

import React, { Component } from 'react';
import { View, StyleSheet, Image, Animated, Button, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carPosition: new Animated.ValueXY({ x: 0, y: 0 }),
      destination: { latitude: 11.0168, longitude: 76.9558 }, // Default destination
      locationName: '', // User input for location name
    };
  }

  moveToDestination = () => {
    const { destination } = this.state;

    // Calculate animation duration based on distance
    const distance = Math.sqrt(
      Math.pow(destination.latitude - 11.0168, 2) +
      Math.pow(destination.longitude - 76.9558, 2)
    );
    const animationDuration = distance * 10000; // Adjust the multiplier for animation speed

    Animated.timing(this.state.carPosition, {
      toValue: { x: destination.latitude, y: destination.longitude },
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  geocodeLocation = async () => {
    const locationName = this.state.locationName;

    // Use a geocoding service (e.g., Google Maps Geocoding API) to convert location name to coordinates
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=AIzaSyBpgc5R3flwiYwtWdjC1MIjfgu_Ttbw5c4`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        this.setState({ destination: { latitude: lat, longitude: lng } });
        this.moveToDestination();
      } else {
        console.log('Location not found');
      }
    } catch (error) {
      console.error('Error geocoding location:', error);
    }
  };

  render() {
    const carStyle = {
      transform: [
        { translateX: this.state.carPosition.x },
        { translateY: this.state.carPosition.y },
      ],
    };

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 11.0168,
            longitude: 76.9558,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 11.0168, longitude: 76.9558 }}
            title="Coimbatore, Tamil Nadu"
            description="A vibrant city in South India"
          >
            {/* Use a custom car icon */}
            <Animated.Image
              source={require('./assets/car.png')}
              style={[{ width: 32, height: 32 }, carStyle]}
            />
          </Marker>
        </MapView>
        {/* <TextInput
          style={styles.input}
          placeholder="Enter Location Name"
          onChangeText={text => this.setState({ locationName: text })}
        />
        <Button title="Move Car" onPress={this.geocodeLocation} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default MapScreen;


