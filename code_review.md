# LuxePass Code Review

## Navigation


### RootNavigator.tsx
```typescript
// src/navigation/RootNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/screens/dashboard/HomeScreen';
import { VehicleListScreen } from '@/screens/dashboard/VehicleListScreen';
import { RequestDetailsScreen } from '@/screens/dashboard/RequestDetailsScreen';
import { RootStackParamList } from './types';
import { SignInScreen } from '@/screens/auth/SignInScreen';
import { SignUpScreen } from '@/screens/auth/SignUpScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '500',
        },
        cardStyle: { backgroundColor: '#000' }
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      {/* ... your other screens */}
    </Stack.Navigator>
  );
};```


### types.ts
```typescript
// src/navigation/types.ts
export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  VehicleList: undefined;
  VehicleDetails: {
    vehicleId: string;
  };
  Booking: {
    vehicleId: string;
  };
  RequestDetails: {
    requestId: string;
  };
};```


## Auth Screens


### SignInScreen.tsx
```typescript
// src/screens/auth/SignInScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';

type Props = StackScreenProps<RootStackParamList, 'SignIn'>;

export const SignInScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});```


### SignUpScreen.tsx
```typescript
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          // TODO: Handle sign up
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.signUpText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.linkText}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Same styles as SignInScreen
});
```


## Dashboard Screens


### HomeScreen.tsx
```typescript
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Stack = createStackNavigator();

// Temporary placeholder screens
const VehicleListScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Vehicle List Screen</Text>
  </View>
);

const SignInScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Sign In Screen</Text>
  </View>
);

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to LuxePass</Text>
    <Text style={styles.subtitle}>Luxury at your fingertips</Text>
    
    <TouchableOpacity
      style={styles.mainButton}
      onPress={() => navigation.navigate('VehicleList')}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Explore Vehicles</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={styles.secondaryButton}
      onPress={() => navigation.navigate('SignIn')}
      activeOpacity={0.7}
    >
      <Text style={styles.secondaryButtonText}>Member Access</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="VehicleList" 
          component={VehicleListScreen}
          options={{ title: 'Available Vehicles' }}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  title: {
    color: '#fff',
    fontSize: 42,  // Increased font size
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    color: '#999',
    fontSize: 20,  // Increased font size
    marginBottom: 48,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  mainButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 18,  // Slightly increased padding
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,  // Increased font size
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 18,  // Slightly increased padding
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 18,  // Increased font size
    fontWeight: '500',
  },
});

export default App;```


### BookingScreen.tsx
```typescript
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
});```


### VehicleDetailsScreen.tsx
```typescript
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
```


### VehicleListScreen.tsx
```typescript
// src/screens/dashboard/VehicleListScreen.tsx
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  ActivityIndicator 
} from 'react-native';
import { supabase } from '@/services/supabase';

type Vehicle = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  // Add any other fields from your Supabase table
};

export const VehicleListScreen = ({ navigation }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const { data, error } = await supabase
        .from('vehicles')  // Your table name in Supabase
        .select('*');
      
      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderVehicle = ({ item }: { item: Vehicle }) => (
    <TouchableOpacity 
      style={styles.vehicleCard}
      onPress={() => navigation.navigate('VehicleDetails', { vehicleId: item.id })}
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.vehicleImage}
      />
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleName}>{item.name}</Text>
        <Text style={styles.vehicleDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.vehiclePrice}>${item.price}/day</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        renderItem={renderVehicle}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  listContent: {
    padding: 16,
  },
  vehicleCard: {
    backgroundColor: '#222',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  vehicleInfo: {
    padding: 16,
  },
  vehicleName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  vehicleDescription: {
    color: '#999',
    fontSize: 16,
    marginBottom: 8,
  },
  vehiclePrice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});```


## Services


### auth.ts
```typescript
// src/services/auth.ts
import { supabase } from './supabase';

export const authService = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signUp(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },
};
```


### booking.ts
```typescript
// src/services/booking.ts
import { supabase } from './supabase';

export const bookingService = {
  async createBooking(vehicleId: string, startDate: Date, endDate: Date) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        vehicle_id: vehicleId,
        user_id: user.id,
        start_date: startDate,
        end_date: endDate,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getUserBookings() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        vehicle:vehicles(*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },
};
```


### supabase.ts
```typescript
// src/services/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlpotaarfkskplfgkwxh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscG90YWFyZmtza3BsZmdrd3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyOTIxNTQsImV4cCI6MjA1MTg2ODE1NH0.FCsPkSrNUEF9fpZCR_iuU4U7_ul9px_HLM42XDVNiO4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

