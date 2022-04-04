import {createContext} from 'react';
import {IDimensionContext} from './type';

export const DimensionContext = createContext<IDimensionContext>(
  {} as IDimensionContext,
);
