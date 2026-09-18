import React, { createContext, useContext, useState } from 'react';
import { MATERIALS } from '../data/materials';

// ListingsContext deler listen af annoncer mellem alle screens/tabs.
// Det svarer til det, arrayet i data/materials.js ville gøre alene,
// men gør det muligt for CreateListingScreen at LÆGGE nye annoncer ind,
// som HomeScreen og ProfileScreen så med det samme kan vise.

const ListingsContext = createContext(null);

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(MATERIALS);

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
