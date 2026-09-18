import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import { COLORS } from '../styles/GlobalStyle';

// Nested stack inde i "Annoncer"-fanen, ligesom StackComponent i
// 02_Navigation-øvelsen: HomeScreen -> ListingDetailScreen med en
// automatisk "tilbage"-header fra React Navigation.
const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="Oversigt" component={HomeScreen} options={{ title: 'ByggeMarked' }} />
      <Stack.Screen name="Annonce" component={ListingDetailScreen} options={{ title: 'Annonce' }} />
    </Stack.Navigator>
  );
}
