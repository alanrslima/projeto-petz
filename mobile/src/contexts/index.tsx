import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from './theme/themeProvider';
// import { Container } from './styles';

const Contexts: React.FC = ({children}) => {
  return (
    <DimensionProvider>
      <ThemeProvider>
        <AlertProvider>{children}</AlertProvider>
      </ThemeProvider>
    </DimensionProvider>
  );
};

export default Contexts;
