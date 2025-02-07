// src/screens/dashboard/VehicleDetailsScreen.tsx
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  ScrollView,
  Dimensions 
} from 'react-native';
import { supabase } from '@/services/supabase';

export const VehicleDetailsScreen = ({ route, navigation }) => {
  const { vehicleId } = route.params;
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetchVehicleDetails();
  }, [vehicleId]);

  const fetchVehicleDetails = async () => {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', vehicleId)
      .single();

    if (data) setVehicle(data);
  };

  if (!vehicle) return null;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: vehicle.image_url }} 
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{vehicle.make} {vehicle.model}</Text>
        <Text style={styles.price}>${vehicle.daily_rate}/day</Text>
        
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { vehicleId })}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height * 0.4,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#999',
    marginBottom: 24,
  },
  bookButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
