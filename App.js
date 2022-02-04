import React from 'react';
import { StyleSheet} from 'react-native';
import { NativeBaseProvider, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen  from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import FormScreen from './screens/FormScreen';
import DetailsScreen from './screens/DetailsScreen';
import theme from './config/theme.js';
import {auth} from './firebase';
import { signOut } from "firebase/auth";


const Stack = createNativeStackNavigator();

export default function App() {
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <NativeBaseProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{ headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options = {{ headerShown: false}} name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen options = {{ 
          headerShown: true, 
          title: "Playlists", 
          headerTitleAlign:"center",
          headerLeft: () => null,
          headerRight: () => (
            <Button
              onPress={handleSignOut}
              color="#00cc00"
            >Sign Out</Button>
          )
      }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options = {{ headerShown: true, title: "New Playlist", headerTitleAlign:"center",}} name="FormScreen" component={FormScreen} />
        <Stack.Screen options = {{ headerShown: true, 
          title: "Details", 
          headerTitleAlign:"center",
          }} name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

