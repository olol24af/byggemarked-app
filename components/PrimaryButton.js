import React from 'react';
import { Pressable, Text } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

// Genbrugelig knap-komponent, ligesom ButtonComponent fra 01_Komponenter/04_Styling.
// variant="primary" (fyldt, rød) eller variant="secondary" (outline).
export default function PrimaryButton({ title, onPress, variant = 'primary' }) {
  const containerStyle = variant === 'primary' ? GlobalStyle.primaryBtn : GlobalStyle.secondaryBtn;
  const textStyle = variant === 'primary' ? GlobalStyle.primaryBtnText : GlobalStyle.secondaryBtnText;

  return (
    <Pressable
      style={({ pressed }) => [containerStyle, pressed && { opacity: 0.7 }]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
