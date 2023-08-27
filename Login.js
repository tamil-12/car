import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Video } from 'expo-av';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const welcomeMessage = 'Welcome back';

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate authentication or API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'tamil' && password === '123') {
        navigation.navigate('Main');
      } else {
        Alert.alert('Authentication Failed', 'Incorrect email or password.');
      }
    }, 2000);
  };

  useEffect(() => {
    animateWelcomeText();
  }, []);

  const animateWelcomeText = () => {
    let index = 0;
    const interval = setInterval(() => {
      setWelcomeText((prevText) => prevText + welcomeMessage[index]);
      index++;
      if (index === welcomeMessage.length) {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/vid.mp4')}
        style={styles.backgroundVideo}
        isLooping
        isMuted
        resizeMode="cover"
        shouldPlay
      />
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>{welcomeText}</Text>
        <Image
          source={require('./assets/1kt.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="white"
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="google" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="mail" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
      </View>
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 50,
    width: 150, // Adjust this to your desired size
    height: 150, // Adjust this to your desired size
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    color: 'white',
  },
  signInButton: {
    backgroundColor: '#3CB043',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    color: 'white',
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
  },
  indicatorContainer: {
    marginTop: 20,
  },
});

export default Login;