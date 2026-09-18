# ByggeMarked

En mobil applikation (React Native / Expo) der forbinder håndværkere og
private, som har **overskud af byggematerialer**, med folk der gerne vil
købe det billigt eller gratis — en slags "DBA for byggematerialer".

Lavet som Godkendelsesopgave 1 (individuel) i INNT, E26.

🔗 **Repo:** [github.com/olol24af/byggemarked-app](https://github.com/olol24af/byggemarked-app)

## 🎥 Demovideo

> LINK TIL DEMOVIDEO INDSÆTTES HER (fx YouTube eller en video uploadet til dette GitHub-repo)

## 📱 Funktioner

- **Annoncer** – oversigt over alle annoncer i en liste (FlatList), med tryk-igennem til en detaljeside for hver annonce.
- **Annonce-detaljer** – ser mængde, pris, stand, lokation og sælger, og kan trykke "Kontakt sælger".
- **Opret** – formular til at oprette sin egen annonce for overskudsmateriale.
- **Min side** – simpel profil der viser de annoncer, man selv har oprettet.

## 🗂️ Struktur

```
ByggeMarked-app/
├── App.js                        # Navigation (bottom tabs + nested stack) og providers
├── components/
│   ├── HomeStackNavigator.js     # Stack: Oversigt -> Annonce
│   ├── ListingCard.js            # Ét annonce-kort i listen
│   └── PrimaryButton.js          # Genbrugelig knap (primary/secondary)
├── context/
│   └── ListingsContext.js        # Delt state for annoncer på tværs af faner
├── data/
│   └── materials.js              # Eksempeldata (array-liste)
├── screens/
│   ├── HomeScreen.js             # Liste over annoncer
│   ├── ListingDetailScreen.js    # Detaljevisning
│   ├── CreateListingScreen.js    # Opret annonce (formular)
│   └── ProfileScreen.js          # Min side
└── styles/
    └── GlobalStyle.js            # Al styling samlet ét sted
```

## ▶️ Kør appen lokalt

```bash
npm install
npx expo start
```

Scan QR-koden med **Expo Go**-appen (iOS/Android), eller tryk `i` / `a` for
simulator/emulator.

Projektet bruger **Expo SDK 57**. Sørg for at din Expo Go-app (på telefonen)
også er på SDK 57 — ellers viser Expo Go en fejl om at appen er lavet til en
anden SDK-version end den installerede Expo Go. Opdatér i så fald Expo Go via
App Store/Google Play, eller kør `npx expo install --fix` for at rette
projektets afhængigheder til den SDK-version, din Expo Go bruger.

## 🧠 Metode

Appen er bygget videre på de mønstre, der er introduceret i kursets
kode-øvelser (CBS-INNT-26 org på GitHub):

- **01_Komponenter & 02_Navigation** – `PrimaryButton` som genbrugelig
  komponent, og bottom-tab-navigation med en nested stack for annonce-detaljer.
- **03_Lister** – `FlatList` i `HomeScreen.js` til at vise annoncerne.
- **04_Styling** – al styling samlet i `styles/GlobalStyle.js` og importeret i
  de enkelte screens/komponenter.

## 👥 Brugerinddragelse

Se den vedlagte rapport for interviewguide, resultater fra brugerinddragelse
og refleksion over egen læring.
