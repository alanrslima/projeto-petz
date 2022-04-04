import React, {useCallback, useEffect, useState} from 'react';
import {ThemeContext} from './themeContext';
import {ITheme, TThemeDiscriminators} from './type';
import * as Themes from './themes';
// import {StorageHelper} from '~/helpers/storage.helper';
import {StatusBar} from 'react-native';

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState(Themes.ThemeLight as ITheme);

  const pickerTheme = (type: TThemeDiscriminators): ITheme => {
    switch (type) {
      case 'light':
        return Themes.ThemeLight;
      case 'dark':
        return Themes.ThemeDark;
      default:
        return Themes.ThemeLight;
    }
  };

  const handleTheme = useCallback((type: TThemeDiscriminators) => {
    // StorageHelper.setCurrentTheme(type);
    setTheme(pickerTheme(type));
  }, []);

  const checkTheme = useCallback(async () => {
    // const currentTheme = await StorageHelper.getCurrentTheme();
    const currentTheme = 'light';
    if (!currentTheme) {
      return;
    }
    StatusBar.setBackgroundColor(theme.colors.primary);
    if (currentTheme === 'light') {
      handleTheme('light');
      StatusBar.setBarStyle('dark-content');
    } else {
      handleTheme('dark');
      StatusBar.setBarStyle('light-content');
    }
  }, [handleTheme, theme.colors.primary]);

  useEffect(() => {
    checkTheme();
  }, [checkTheme]);

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
