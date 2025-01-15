import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type RequestDetailsRouteProp = RouteProp<RootStackParamList, 'RequestDetails'>;

export function RequestDetailsScreen() {
  const route = useRoute<RequestDetailsRouteProp>();
  const { requestId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Details</Text>
      <Text style={styles.subtitle}>Request ID: {requestId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});