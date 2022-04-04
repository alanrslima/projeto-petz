import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface IPTextStyle {
  light?: StyleProp<TextStyle>;
  regular?: StyleProp<TextStyle>;
  medium?: StyleProp<TextStyle>;
  semiBold?: StyleProp<TextStyle>;
  bold?: StyleProp<TextStyle>;
  black?: StyleProp<TextStyle>;
}

export const PTextStyle = (): IPTextStyle => {
  return StyleSheet.create({
    light: {fontFamily: 'Montserrat-Light'},
    regular: {fontFamily: 'Montserrat-Regular'},
    medium: {fontFamily: 'Montserrat-Medium'},
    semiBold: {fontFamily: 'Montserrat-SemiBold'},
    bold: {fontFamily: 'Montserrat-Bold'},
    black: {fontFamily: 'Montserrat-Black'},
  });
};
