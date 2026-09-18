import { StyleSheet } from 'react-native';

// Al styling til appen samles i denne fil, ligesom i 04_Styling-øvelsen.
// Det gør det nemt at holde et ensartet udtryk (farver, afstand, skrift)
// på tværs af alle screens, og at ændre "look and feel" ét sted.

export const COLORS = {
  background: '#FFF7F0',
  card: '#FFFFFF',
  primary: '#C1440E', // "murstensrød" - passer til byggemateriale-temaet
  primaryLight: '#F4D3C2',
  text: '#2B2320',
  textMuted: '#7A6F68',
  border: '#E7DCD3',
  success: '#3A7D44',
};

export const GlobalStyle = StyleSheet.create({
  // Generel container
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screenPadding: {
    padding: 16,
  },
  centered: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  // Tekst
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 15,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
  mutedText: {
    fontSize: 13,
    color: COLORS.textMuted,
  },

  // ListingCard (bruges i HomeScreen-listen)
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
    marginRight: 8,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginTop: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.primary,
  },

  // Knapper (PrimaryButton-komponenten)
  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondaryBtnText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
  },

  // Formular (CreateListingScreen)
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginTop: 14,
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.text,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },

  // ProfileScreen
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarInitials: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.primary,
  },
});
