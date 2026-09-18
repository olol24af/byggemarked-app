import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useListings } from '../context/ListingsContext';
import PrimaryButton from '../components/PrimaryButton';

// Detaljevisning for én annonce. Tilgås via stacken der er nestet inde i
// "Annoncer"-tabben (se components/HomeStackNavigator.js), så man kan
// navigere frem og tilbage med en normal header/back-knap.
export default function ListingDetailScreen({ route }) {
  const { listingId } = route.params;
  const { listings } = useListings();
  const listing = listings.find((item) => item.id === listingId);

  if (!listing) {
    return (
      <View style={GlobalStyle.centered}>
        <Text style={GlobalStyle.bodyText}>Annoncen blev ikke fundet.</Text>
      </View>
    );
  }

  function handleContactSeller() {
    // Simulerer at sende en besked til sælgeren. Kravet er blot at knappen
    // har en reel funktion - i en fuld version ville dette åbne en chat.
    Alert.alert(
      'Besked sendt',
      `${listing.sellerName} har modtaget en besked om "${listing.title}".`
    );
  }

  return (
    <ScrollView style={GlobalStyle.container} contentContainerStyle={GlobalStyle.screenPadding}>
      <Text style={GlobalStyle.heading}>{listing.title}</Text>
      <Text style={[GlobalStyle.cardPrice, { fontSize: 22, marginBottom: 12 }]}>
        {listing.price === 0 ? 'Gratis' : `${listing.price} kr.`}
      </Text>

      <View style={GlobalStyle.badge}>
        <Text style={GlobalStyle.badgeText}>{listing.category}</Text>
      </View>

      <Text style={GlobalStyle.sectionTitle}>Beskrivelse</Text>
      <Text style={GlobalStyle.bodyText}>{listing.description}</Text>

      <Text style={GlobalStyle.sectionTitle}>Detaljer</Text>
      <Text style={GlobalStyle.bodyText}>Mængde: {listing.amount}</Text>
      <Text style={GlobalStyle.bodyText}>Stand: {listing.condition}</Text>
      <Text style={GlobalStyle.bodyText}>Lokation: {listing.location}</Text>

      <Text style={GlobalStyle.sectionTitle}>Sælger</Text>
      <Text style={GlobalStyle.bodyText}>
        {listing.sellerName} · {listing.sellerType}
      </Text>
      <Text style={GlobalStyle.mutedText}>Oprettet {listing.postedDate}</Text>

      <PrimaryButton title="Kontakt sælger" onPress={handleContactSeller} />
    </ScrollView>
  );
}
