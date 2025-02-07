// src/screens/dashboard/BookingScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';
import { bookingService } from '@/services/booking';

type Props = StackScreenProps<RootStackParamList, 'Booking'>;

export const BookingScreen: React.FC<Props> = ({ route, navigation }) => {
  const { vehicleId } = route.params;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleBooking = async () => {
    try {
      await bookingService.createBooking(vehicleId, startDate, endDate);
      Alert.alert('Success', 'Your booking has been created');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Add DatePicker components here for startDate and endDate */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={handleBooking}
      >
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  bookButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});