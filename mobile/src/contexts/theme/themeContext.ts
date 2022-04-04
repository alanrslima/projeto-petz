import {createContext} from 'react';
import {IThemeContext} from './type';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
