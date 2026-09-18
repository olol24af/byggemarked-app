import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useListings } from '../context/ListingsContext';
import ListingCard from '../components/ListingCard';

// HomeScreen viser alle annoncer i en FlatList (kravet om "minimum 1 liste").
// Når man trykker på et kort, navigerer vi til ListingDetail - dét er den
// ene af de to obligatoriske knapper, der skal have en reel funktion.
export default function HomeScreen({ navigation }) {
  const { listings } = useListings();

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.screenPadding}>
        <Text style={GlobalStyle.heading}>Byggematerialer nær dig</Text>
        <Text style={GlobalStyle.subheading}>
          {listings.length} annoncer fra håndværkere og private med overskudsmateriale
        </Text>
      </View>

      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard
            listing={item}
            onPress={() => navigation.navigate('Annonce', { listingId: item.id })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
