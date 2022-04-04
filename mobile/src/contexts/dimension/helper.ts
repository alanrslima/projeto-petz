import {ESize} from './type';

export const calculateSize = (width: number) => {
  if (width > 1000) {
    return ESize.Large;
  } else if (width > 600) {
    return ESize.Medium;
  }
  return ESize.Small;
};
