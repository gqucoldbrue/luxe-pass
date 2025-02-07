import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/dashboard/HomeScreen';
import VehicleList from '../screens/dashboard/VehicleList'; // Ensure these imports are correct
import Profile from '../screens/dashboard/Profile'; // Ensure these imports are correct

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        cardStyle: { backgroundColor: '#000' }
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="VehicleList" 
        component={VehicleList}
        options={{ title: 'Explore Vehicles' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{ title: 'Member Access' }}
      />
    </Stack.Navigator>
  );
}