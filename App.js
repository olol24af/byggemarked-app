import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './components/HomeStackNavigator';
import CreateListingScreen from './screens/CreateListingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { ListingsProvider } from './context/ListingsContext';
import { COLORS } from './styles/GlobalStyle';

// App.js sætter navigationen op med en bund-tab-bar (ligesom i
// 02_Navigation- og 03_Lister-øvelserne): tre faner, hvor "Annoncer"
// selv indeholder en nested stack (oversigt -> annoncedetaljer).
// ListingsProvider pakker det hele ind, så alle tre faner deler
// den samme liste af annoncer.
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ListingsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: '#9C9088',
            tabBarIcon: ({ color, size }) => {
              let iconName = 'home';
              if (route.name === 'Annoncer') iconName = 'list';
              else if (route.name === 'Opret') iconName = 'add-circle';
              else if (route.name === 'Min side') iconName = 'person';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Annoncer" component={HomeStackNavigator} />
          <Tab.Screen name="Opret" component={CreateListingScreen} />
          <Tab.Screen name="Min side" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ListingsProvider>
  );
}
