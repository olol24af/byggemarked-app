import React from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useListings } from '../context/ListingsContext';
import ListingCard from '../components/ListingCard';
import PrimaryButton from '../components/PrimaryButton';

// ProfileScreen ("Min side") viser en mock-bruger og de annoncer,
// brugeren selv har oprettet via CreateListingScreen (sellerName === 'Dig').
export default function ProfileScreen({ navigation }) {
  const { listings } = useListings();
  const myListings = listings.filter((item) => item.sellerName === 'Dig');

  function handleLogout() {
    Alert.alert('Logget ud', 'Dette er en demo - der er ikke rigtig login i denne version.');
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.profileHeader}>
        <View style={GlobalStyle.avatarCircle}>
          <Text style={GlobalStyle.avatarInitials}>DU</Text>
        </View>
        <Text style={GlobalStyle.heading}>Din profil</Text>
        <Text style={GlobalStyle.mutedText}>{myListings.length} oprettede annoncer</Text>
      </View>

      {myListings.length === 0 ? (
        <View style={GlobalStyle.screenPadding}>
          <Text style={GlobalStyle.bodyText}>
            Du har ikke oprettet nogen annoncer endnu. Gå til "Opret" for at lægge dit
            overskudsmateriale op.
          </Text>
        </View>
      ) : (
        <FlatList
          data={myListings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => navigation.navigate('Annoncer', { screen: 'Annonce', params: { listingId: item.id } })}
            />
          )}
          contentContainerStyle={{ paddingVertical: 12 }}
        />
      )}

      <View style={GlobalStyle.screenPadding}>
        <PrimaryButton title="Log ud" variant="secondary" onPress={handleLogout} />
      </View>
    </View>
  );
}
