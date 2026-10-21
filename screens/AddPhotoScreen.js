import React, { useState } from 'react';
import { Alert, Image, Platform, ScrollView, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Directory, File, Paths } from 'expo-file-system';
import { GlobalStyle } from '../styles/GlobalStyle';
import PrimaryButton from '../components/PrimaryButton';

// Ny skærm i opgave 2: her kan brugeren tage et billede med kameraet eller vælge
// et fra telefonens bibliotek og tilføje det til sin annonce. Funktionen bygger
// på feedback fra opgave 1, hvor købere efterlyste billeder af materialet.

const PICKER_OPTIONS = {
  mediaTypes: ['images'],
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.6,
};

// Billeder fra kameraet/biblioteket ligger i en midlertidig mappe, som telefonen
// kan rydde. Derfor kopieres billedet til appens egen mappe, så det stadig findes,
// når annoncen hentes fra AsyncStorage næste gang appen åbnes.
async function savePhotoPermanently(uri) {
  if (Platform.OS === 'web') return uri; // filsystemet findes ikke på web

  const photosDir = new Directory(Paths.document, 'photos');
  if (!photosDir.exists) {
    photosDir.create();
  }
  const target = new File(photosDir, `${Date.now()}.jpg`);
  await new File(uri).copy(target);
  return target.uri;
}

export default function AddPhotoScreen({ navigation }) {
  const [photoUri, setPhotoUri] = useState(null);

  async function handleTakePhoto() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Ingen adgang til kamera', 'Giv appen adgang til kameraet i indstillinger.');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync(PICKER_OPTIONS);
      if (!result.canceled) {
        setPhotoUri(result.assets[0].uri);
      }
    } catch (error) {
      // Fx i iOS-simulatoren, som ikke har et kamera
      Alert.alert('Kamera ikke tilgængeligt', 'Vælg i stedet et billede fra biblioteket.');
    }
  }

  async function handlePickFromLibrary() {
    const result = await ImagePicker.launchImageLibraryAsync(PICKER_OPTIONS);
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  }

  async function handleUsePhoto() {
    try {
      const savedUri = await savePhotoPermanently(photoUri);
      // Gå tilbage til formularen og send billedet med som parameter
      navigation.popTo('Opret annonce', { photoUri: savedUri });
    } catch (error) {
      Alert.alert('Kunne ikke gemme billedet', 'Prøv igen.');
    }
  }

  return (
    <ScrollView style={GlobalStyle.container} contentContainerStyle={GlobalStyle.screenPadding}>
      <Text style={GlobalStyle.heading}>Tilføj billede</Text>
      <Text style={GlobalStyle.subheading}>
        Annoncer med billeder er nemmere at stole på. Tag et billede af materialet, eller vælg
        et du allerede har.
      </Text>

      {photoUri ? (
        <Image source={{ uri: photoUri }} style={GlobalStyle.photoPreview} />
      ) : (
        <View style={[GlobalStyle.photoPreview, GlobalStyle.photoPlaceholder]}>
          <Text style={GlobalStyle.mutedText}>Intet billede valgt endnu</Text>
        </View>
      )}

      <PrimaryButton title="Tag billede" onPress={handleTakePhoto} />
      <PrimaryButton title="Vælg fra bibliotek" variant="secondary" onPress={handlePickFromLibrary} />
      {photoUri && <PrimaryButton title="Brug dette billede" onPress={handleUsePhoto} />}
    </ScrollView>
  );
}
