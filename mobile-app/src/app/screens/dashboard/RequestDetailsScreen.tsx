import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';

type Props = StackScreenProps<RootStackParamList, 'RequestDetails'>;

export const RequestDetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Request Details Screen</Text>
    </View>
  );
};