import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

// Ét element i FlatList'en på HomeScreen. At bryde det ud i sin egen
// komponent gør renderItem i HomeScreen kort og let at læse.
export default function ListingCard({ listing, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [GlobalStyle.card, pressed && { opacity: 0.8 }]}
      onPress={onPress}
    >
      <View style={GlobalStyle.cardRow}>
        <Text style={GlobalStyle.cardTitle} numberOfLines={2}>
          {listing.title}
        </Text>
        <Text style={GlobalStyle.cardPrice}>
          {listing.price === 0 ? 'Gratis' : `${listing.price} kr.`}
        </Text>
      </View>
      <Text style={GlobalStyle.mutedText}>
        {listing.amount} · {listing.location}
      </Text>
      <View style={GlobalStyle.badge}>
        <Text style={GlobalStyle.badgeText}>{listing.category}</Text>
      </View>
    </Pressable>
  );
}
