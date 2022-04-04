import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

export interface IPIcon {
  size?: number;
  color?: string;
  name?: TPIconName;
}

export type TPIconName =
  | 'plus'
  | 'home'
  | 'user'
  | 'check'
  | 'calendar'
  | 'filter'
  | 'x'
  | 'briefcase'
  | 'pie-chart'
  | 'book-open'
  | 'bell'
  | 'bar-chart'
  | 'camera'
  | 'minus'
  | 'image'
  | 'camera'
  | 'settings'
  | 'log-out'
  | 'arrow-left'
  | 'chevron-right'
  | 'message-circle'
  | 'help-circle'
  | 'file-text'
  | 'phone-forwarded'
  | 'arrow-up'
  | 'arrow-down'
  | 'target'
  | 'search';

export const PIcon: React.FC<IPIcon> = ({name, color = '#000', size = 20}) => {
  return <IconFeather color={color} size={size} name={name as string} />;
};
