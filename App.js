// import React, { useState } from 'react';
// import { View, StatusBar, TouchableWithoutFeedback } from 'react-native';
// import Header from './Header'; // Adjust the path
// import Main from './Main'; // Adjust the path
// import Footer from './Footer'; // Adjust the path
// // import styles from './style';
// import { Text, TouchableOpacity,  Modal } from 'react-native';
// import { BlurView } from 'react-native';
// // import styles from './style';

// function App() {
 
//   return (
//     <View  style={{backgroundColor:'black',height:'100%'}} >
//     <Header/>
//       <Main />
//       <Footer />

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // export default App;

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './MapScreen'; // Adjust the path
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { AppRegistry } from 'react-native';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={{ backgroundColor: 'black', height: '100%' }}>
        <Stack.Navigator
          initialRouteName="Home" // Set your initial screen here
          screenOptions={{
            header: Header, // Use your custom header component
          }}
        >
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          {/* Add more screens as needed */}
        </Stack.Navigator>
        <Footer />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>

  );
}

export default App;
