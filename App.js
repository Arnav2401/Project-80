import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';
import Home from './screens/Home.js'
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='DailyPic' component={DailyPic} />
        <Stack.Screen name='SpaceCraft' component={SpaceCraft} />
        <Stack.Screen name='StarMap' component={StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



