import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextPropTypes} from 'react-native';

import { NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen  from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import FormScreen from './screens/FormScreen';
import theme from './config/theme.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" >
        <Stack.Screen options = {{ headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options = {{ headerShown: false}} name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen options = {{ headerShown: true, title: "Playlists", headerTitleAlign:"center"}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options = {{ headerShown: true, title: "New Playlist", headerTitleAlign:"center"}} name="FormScreen" component={FormScreen} />
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

