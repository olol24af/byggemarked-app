import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateListingScreen from '../screens/CreateListingScreen';
import AddPhotoScreen from '../screens/AddPhotoScreen';
import { COLORS } from '../styles/GlobalStyle';

// Nested stack inde i "Opret"-fanen (samme opbygning som HomeStackNavigator):
// formularen -> AddPhotoScreen, hvor brugeren tager/vælger et billede.
const Stack = createNativeStackNavigator();

export default function CreateStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="Opret annonce"
        component={CreateListingScreen}
        options={{ title: 'ByggeMarked' }}
      />
      <Stack.Screen name="Tilføj billede" component={AddPhotoScreen} options={{ title: 'Billede' }} />
    </Stack.Navigator>
  );
}
