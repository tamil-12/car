import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable, TextInput,Animated,} from 'react-native';
import Slider from '@react-native-community/slider'
import Video from 'react-native-video';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'hsl(219, 4%, 4%);', // Set black background
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set white font color
  },
  sectionSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    alignItems:'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width:120
  },
  card1: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    gap:5
  },
  card2: {
    flexDirection:'row',
    padding:0,
    justifyContent:'center'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set white font color
  },
  cardDescription: {
    fontSize: 16,
    color: 'white', // Set white font color
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  number:{
    fontSize:30
  },
  logo:{
    fontSize:20,
    marginBottom:20
  },
  Desc:{
    color:'white',
    fontSize:10,
    marginTop:10
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  home__button: {
    borderWidth: 2,
    borderColor: 'hsl(158, 89%, 30%)',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  
  image1:{
    resizeMode:'contain',
    width:500,
    height:500,
    position:'relative',
    right:60,
   },
  buttonGlow: {
    borderWidth: 2,
    borderColor: 'hsl(158, 98%, 43%)',
    width: 90,
    height: 90,
    borderRadius: 43,
    shadowColor: 'hsl(158, 98%, 43%)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 7,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rangeInput: {
    marginBottom: 20,
  },
  rangeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  rangeSlider: {
    width: '100%',
  },
  rangeValue: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

const Main = () => {
  const [temp,setTemp]=useState(0);
  const [mil,setMil]=useState(0);
  const [bat,setBat]=useState(0);
  const [color,setColor]=useState('green');
  const [status,setStatus]=useState('Good');
  
  const [fadeIn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <ScrollView style={styles.main}>
    <View style={styles.section}>
      <View style={styles.card1}>
        <Text style={[styles.cardTitle,{marginBottom:30}]}>Autonomous car</Text>
        <Text style={styles.cardTitle}>POSRCHE</Text>
        <Text style={[styles.cardDescription,{color:'blue'}]}>
          <Text style={{ fontSize: 24 }}></Text> Electric car
        </Text>
      </View>
      {/* <Animated.Image
        source={require('./img/home.png')}
        style={[styles.image, { opacity: fadeIn }]}
      /> */}
     <Video
        source={require('./assets/vid.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
      />

<Text style={
  {
    color:'white',
    textAlign:'center'
    ,marginBottom:6
  }
} >Battery Condition </Text>
      <View style={{
        width:80,
        height:30,
        borderColor:'white',
        borderWidth:1,
        marginLeft:133,
        backgroundColor:color
        ,alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      }} >
        
      <Text >{status}</Text>
      </View>
      <View style={styles.card2}>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>🌡</Text>
          </View>
          <View>
            <Text style={[styles.number,{color:'white'}]}>{temp}°C</Text>
          </View>
          <View>
            <Text style={styles.Desc}>TEMPERATURE</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>⚪</Text>
          </View>
          <View>
            <Text style={[styles.number,{color:'white'}]}>{mil}</Text>
          </View>
          <View>
            <Text style={styles.Desc}>MILEAGE</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.logo}>⚡</Text>
          </View>
          <View>
            <Text style={[styles.number,{color:'white'}]}>{bat}%</Text>
          </View>
          <View>
            <Text style={styles.Desc}>BATTERY</Text>
          </View>
        </View>
        
      </View>
      <Pressable onPress={() => alert('Cannot start..!..Please Connect your Vehicle')}>
  <View style={styles.buttonWrapper}>
    <Animated.View style={[styles.home__button, { opacity: fadeIn }]}>
      <Text style={{ fontSize: 18, color: 'white' }}>START</Text>
    </Animated.View>
    <View style={styles.buttonGlow}></View>
  </View>
</Pressable>
    
      </View>
    </ScrollView>
  );
};

export default Main;

