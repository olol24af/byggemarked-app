import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MATERIALS } from '../data/materials';

// ListingsContext deler listen af annoncer mellem alle screens/tabs.
// Annoncerne gemmes lokalt på telefonen med AsyncStorage, så de nye annoncer
// (og deres billeder) stadig er der, når appen lukkes og åbnes igen.
// Første gang appen åbnes, er der ikke noget gemt, og så bruges eksempeldataene
// fra data/materials.js som udgangspunkt.

const STORAGE_KEY = 'byggemarked:listings';

const ListingsContext = createContext(null);

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(MATERIALS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hent gemte annoncer én gang, når appen starter
  useEffect(() => {
    async function loadListings() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setListings(JSON.parse(saved));
        }
      } catch (error) {
        console.warn('Kunne ikke hente gemte annoncer', error);
      } finally {
        setIsLoaded(true);
      }
    }
    loadListings();
  }, []);

  // Gem annoncerne hver gang listen ændrer sig. Vi venter til de gemte data er
  // hentet, så vi ikke overskriver dem med eksempeldataene ved opstart.
  useEffect(() => {
    if (!isLoaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listings)).catch((error) =>
      console.warn('Kunne ikke gemme annoncer', error)
    );
  }, [listings, isLoaded]);

  function addListing(newListing) {
    setListings((prev) => [
      {
        ...newListing,
        id: Date.now().toString(),
        sellerName: 'Dig',
        sellerType: 'Mig',
        postedDate: new Date().toISOString().slice(0, 10),
      },
      ...prev,
    ]);
  }

  const value = { listings, addListing };

  return <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>;
}

export function useListings() {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error('useListings skal bruges inden i en <ListingsProvider>');
  }
  return context;
}
