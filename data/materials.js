// Statisk array med eksempel-annoncer, ligesom "array-lister" fra 03_Lister-øvelsen.
// I en videre version af appen ville dette array blive erstattet af data fra en
// rigtig database/API (se fx 05_Firebase-øvelsen), men til denne opgave simulerer
// arrayet det opslagstavle af annoncer, som brugerne opretter via CreateListingScreen.

export const MATERIALS = [
  {
    id: '1',
    title: 'Rest af terrassebrædder, trykimprægneret',
    category: 'Træ',
    amount: '18 stk. (4,2 m)',
    price: 600,
    condition: 'Ny - overskud fra projekt',
    location: 'Frederiksberg',
    sellerName: 'Anders Byg ApS',
    sellerType: 'Håndværker',
    description:
      'Vi har fået 18 brædder for meget hjem til en terrasseopgave. Ligger tørt i carport. Kan afhentes efter aftale.',
    postedDate: '2026-09-02',
  },
  {
    id: '2',
    title: 'Gipsplader 13 mm, ubrudt palle',
    category: 'Gips/Plader',
    amount: '32 plader',
    price: 900,
    condition: 'Ny, ubrudt palle',
    location: 'Valby',
    sellerName: 'Mette Jensen',
    sellerType: 'Privat',
    description:
      'Købt for meget ind til renovering af kælder. Pladerne har stået tørt og er aldrig blevet brudt.',
    postedDate: '2026-09-05',
  },
  {
    id: '3',
    title: 'Klinker, hvide 30x30, ca. 12 m²',
    category: 'Fliser/Klinker',
    amount: '12 m²',
    price: 450,
    condition: 'Ny i kasser',
    location: 'Amager',
    sellerName: 'Nordbyg A/S',
    sellerType: 'Håndværker',
    description:
      'Overskud fra badeværelsesrenovering. Samme parti, så farven matcher. Kasserne er ubrudte.',
    postedDate: '2026-09-06',
  },
  {
    id: '4',
    title: 'Isoleringsbatts 100 mm, rest',
    category: 'Isolering',
    amount: '6 pakker',
    price: 250,
    condition: 'Ny, åbnet emballage',
    location: 'Hvidovre',
    sellerName: 'Peter Sørensen',
    sellerType: 'Privat',
    description:
      'Rest efter efterisolering af loft. Emballagen er åbnet men isoleringen er ubrugt.',
    postedDate: '2026-09-08',
  },
  {
    id: '5',
    title: 'Murbrokker/teglsten, brugte',
    category: 'Sten/Beton',
    amount: 'ca. 300 stk.',
    price: 0,
    condition: 'Brugt, nedrivningsmursten',
    location: 'Rødovre',
    sellerName: 'Byg & Nedriv ApS',
    sellerType: 'Håndværker',
    description:
      'Gratis for afhentning. Fra nedrivning af skur. Skal hentes senest på fredag, da pladsen skal ryddes.',
    postedDate: '2026-09-10',
  },
  {
    id: '6',
    title: 'Malerrester - hvid loftmaling',
    category: 'Maling',
    amount: '2 x 10 L spande',
    price: 150,
    condition: 'Ny, ubrudt',
    location: 'København N',
    sellerName: 'Laila Petersen',
    sellerType: 'Privat',
    description: 'Købte for meget ind til stue og gang. Uåbnede spande, samme parti/farve.',
    postedDate: '2026-09-11',
  },
];
