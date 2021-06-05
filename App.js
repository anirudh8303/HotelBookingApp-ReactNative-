import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from './screens/DetailsScreen';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="dark" />
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home" component={HomeScreen}>
    </Stack.Screen>
    <Stack.Screen name="details" component={DetailsScreen}>
    </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
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
