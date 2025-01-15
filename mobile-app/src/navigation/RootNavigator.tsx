// src/navigation/RootNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { RequestDetailsScreen } from '../screens/dashboard/RequestDetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Dashboard"
      screenOptions={{
        // These options create a luxury app feel with subtle animations
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
        },
        // Smooth card transitions for a premium feel
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
      }}
    >
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          title: 'LuxePass Dashboard',
        }} 
      />
      <Stack.Screen 
        name="RequestDetails" 
        component={RequestDetailsScreen}
        options={{
          title: 'Request Details',
        }} 
      />
    </Stack.Navigator>
  );
}
