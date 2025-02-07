// src/screens/dashboard/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: '#999',
    fontSize: 20,
    marginBottom: 48,
    textAlign: 'center',
  },
  mainButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LuxePass</Text>
      <Text style={styles.subtitle}>Luxury at your fingertips</Text>
      
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('VehicleList')}
      >
        <Text style={styles.buttonText}>Explore Vehicles</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.secondaryButtonText}>Member Access</Text>
      </TouchableOpacity>
    </View>
  );
}