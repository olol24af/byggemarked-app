import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useListings } from '../context/ListingsContext';
import PrimaryButton from '../components/PrimaryButton';

const EMPTY_FORM = {
  title: '',
  category: '',
  amount: '',
  price: '',
  condition: '',
  location: '',
  description: '',
};

// Formular til at oprette en ny annonce. Indeholder de to obligatoriske
// knapper: "Opret annonce" (primær, gemmer annoncen) og "Ryd formular"
// (sekundær, nulstiller felterne) - begge med en reel funktion.
export default function CreateListingScreen({ navigation }) {
  const { addListing } = useListings();
  const [form, setForm] = useState(EMPTY_FORM);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleClear() {
    setForm(EMPTY_FORM);
  }

  function handleSubmit() {
    if (!form.title.trim() || !form.amount.trim()) {
      Alert.alert('Udfyld titel og mængde', 'Titel og mængde skal udfyldes for at oprette annoncen.');
      return;
    }

    addListing({
      title: form.title.trim(),
      category: form.category.trim() || 'Andet',
      amount: form.amount.trim(),
      price: Number(form.price) || 0,
      condition: form.condition.trim() || 'Ikke angivet',
      location: form.location.trim() || 'Ikke angivet',
      description: form.description.trim() || 'Ingen beskrivelse tilføjet.',
    });

    Alert.alert('Annonce oprettet', 'Din annonce er nu synlig under "Annoncer".');
    handleClear();
    navigation.navigate('Annoncer');
  }

  return (
    <ScrollView style={GlobalStyle.container} contentContainerStyle={GlobalStyle.screenPadding}>
      <Text style={GlobalStyle.heading}>Opret annonce</Text>
      <Text style={GlobalStyle.subheading}>
        Har du overskudsmateriale fra et byggeprojekt? Beskriv det herunder.
      </Text>

      <Text style={GlobalStyle.inputLabel}>Titel *</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="Fx 'Rest af terrassebrædder'"
        value={form.title}
        onChangeText={(text) => updateField('title', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Kategori</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="Fx 'Træ', 'Fliser', 'Isolering'"
        value={form.category}
        onChangeText={(text) => updateField('category', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Mængde *</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="Fx '12 m²' eller '6 stk.'"
        value={form.amount}
        onChangeText={(text) => updateField('amount', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Pris (kr., 0 = gratis)</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="0"
        keyboardType="numeric"
        value={form.price}
        onChangeText={(text) => updateField('price', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Stand</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="Fx 'Ny, ubrudt' eller 'Brugt'"
        value={form.condition}
        onChangeText={(text) => updateField('condition', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Lokation</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder="Fx 'Frederiksberg'"
        value={form.location}
        onChangeText={(text) => updateField('location', text)}
      />

      <Text style={GlobalStyle.inputLabel}>Beskrivelse</Text>
      <TextInput
        style={[GlobalStyle.textInput, GlobalStyle.textArea]}
        placeholder="Beskriv materialet, mængde og hvorfor du sælger det"
        multiline
        value={form.description}
        onChangeText={(text) => updateField('description', text)}
      />

      <PrimaryButton title="Opret annonce" onPress={handleSubmit} />
      <PrimaryButton title="Ryd formular" variant="secondary" onPress={handleClear} />
    </ScrollView>
  );
}
