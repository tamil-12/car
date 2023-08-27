import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator,Alert,Video } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons'; // Import icons

import Main from './Main';

const Login= () => {
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
    }, 150);
  };

  return (
    <View style={styles.container}>
      {/* <Video
        source={require('./assets/vid.mp4')} // Replace with your video URL
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
      /> */}
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

        <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  signUpButton: {
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
  indicatorContainer: {
    marginTop: 20,
  },
});

export default Login;




// // import React from 'react';
// // import { View, StatusBar, UIManager, Platform, Image } from 'react-native';
// // import LoginScreen from 'react-native-login-screen';
// // import TextInput from 'react-native-text-input-interactive';
// // import App from './App';

// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const Login = () => {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [repassword, setRepassword] = React.useState('');

//   const renderSignupLoginScreen = () => (
//     <LoginScreen
//       logoImageSource={require('./assets/1kt.png')}
//       onLoginPress={() => {}}
//       onSignupPress={() => {}}
//       onEmailChange={setUsername}
//       loginButtonText={'Create an account'}
//       disableSignup
//       textInputChildren={
//         <View style={{ marginTop: 16 }}>
//           <TextInput
//             placeholder="Re-Password"
//             secureTextEntry
//             onChangeText={setRepassword}
//           />
//         </View>
//       }
//       onPasswordChange={setPassword}
//     />
//   );

//   const renderLoginScreen = () => (
//     <LoginScreen
//       logoImageSource={require('./assets/1kt.png')}
//       onLoginPress={() => {}}
//       onSignupPress={() => {}}
//       onEmailChange={setUsername}
//       onPasswordChange={setPassword}
//       enablePasswordValidation
//     />
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar barStyle="light-content" />
//       {renderLoginScreen()}
//     </View>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Main from './Main';


// const Login = () => {
//   const navigation = useNavigation(); // Initialize navigation hook
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleGetStarted = () => {
//     setIsLoading(true);
//     // Simulate API call or authentication check
//     setTimeout(() => {
//       setIsLoading(false);
//       if (username === 'tamil' && password === '123') {
//         // Navigate to the 'Main' screen when credentials are correct
//         navigation.navigate('Main');
      
//       } else {
//         // Show an alert for incorrect credentials
//         Alert.alert('Authentication Failed', 'Incorrect username or password.');
//       }
//     }, 2000);
//   };


//   return (
//     <ImageBackground
//       source={{
//         uri: 'https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&w=600',
//       }}
//       resizeMode="cover"
//       style={styles.image}
//     >
//            <View style={styles.logo}>
//         <Image
//           style={styles.tinyLogo}
//           source={require('./assets/1kt.png')}
//         />
//         </View>
//       <View style={styles.container}>
   
       
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={(text) => setUsername(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />

//         <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
//           <Text style={styles.buttonText}>Log in</Text>
//         </TouchableOpacity>

//         {isLoading && (
//           <View style={styles.indicatorContainer}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         )}
//         <View style={styles.fixToText}>
//           {/* ... rest of the code ... */}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     position:"relative",
//     bottom:60,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 20,
//     padding: 10,
//     color: 'red',
//     backgroundColor: 'white',
//   },
//   getStartedButton: {
//     backgroundColor: '#3CB043',
//     padding: 10,
//     width: '100%',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   tinyLogo: {
   
//     width: '100%',
//     height: '100%'
//   },
//   indicatorContainer: {
//     marginTop: 20,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 100,
//   },
//   right: {
//     marginLeft: 100,
//     color: 'white',
//     fontSize: 20,
//   },
//   left: {
//     marginLeft: 10,
//     color: 'white',
//     fontSize: 20,
//   },
//   wel: {
//     fontSize: 30,
//     color: 'white',
//   },
//   contentContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//     width: '80%',
//     alignItems: 'center',
//   },
//   userInfoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   userInfoLabel: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   userInfo: {
//     color: 'white',
//     fontSize: 18,
//   },
//   goBackButton: {
//     backgroundColor: '#3CB043',
//     padding: 10,
//     width: '60%',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   goBackButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   logo:{
    
//     width: 100,
//     height: 100,
//     borderRadius: 10, // To create a circular shape
//     overflow: 'hidden', // Clip the content to the circle
//     backgroundColor: 'white',
//     position:"relative",
//     left:150,
//     top:60,
   
//   },
// });

// export default Login;

