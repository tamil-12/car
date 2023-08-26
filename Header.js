import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    padding: 10,
  },
  nav__container: {
    alignItems: 'center',
  },
  nav__logo: {
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  nav__menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nav_item: {
    paddingHorizontal: 10,
  },
  nav__link: {
    fontSize: 16,
    color: 'white',
  },
  emoji: {
    fontSize: 20,
    marginRight: 5,
  },
});

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.nav__container}>
        <View style={styles.nav__logo}>
          <TouchableOpacity onPress={() => alert('Logo Clicked')}>
            <Text style={styles.logoText}>
              <Text style={styles.emoji}>⚙️</Text>KRISHTEC
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nav__menu}>
          <View style={styles.nav_item}>
            <TouchableOpacity onPress={() => alert('Home Clicked')}>
              <Text style={styles.nav__link}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nav_item}>
            <TouchableOpacity onPress={() => alert('About Clicked')}>
              <Text style={styles.nav__link}>About</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nav_item}>
            <TouchableOpacity onPress={() => alert('Popular Clicked')}>
              <Text style={styles.nav__link}>Popular</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.nav_item}>
            <TouchableOpacity onPress={() => alert('Map Clicked')}>
              <Text style={styles.nav__link}>Location</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.nav_item}>
      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
        <Text style={styles.nav__link}>Location</Text>
      </TouchableOpacity>
    </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
