import React, {useState} from 'react';
import {DimensionContext} from './dimensionContext';
import {View, StyleSheet, LayoutChangeEvent, Dimensions} from 'react-native';
import {EOrientation, IDimension} from './type';
import {calculateSize} from './helper';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const DimensionProvider: React.FC = ({children}) => {
  const [dimension, setDimension] = useState(null as IDimension | null);

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const windowDimension = Dimensions.get('window');
    const orientation =
      windowDimension.width > windowDimension.height
        ? EOrientation.Landscape
        : EOrientation.Portrait;

    const value: IDimension = {
      orientation,
      size: calculateSize(width),
      width,
      height,
      scale: windowDimension.scale,
      fontScale: windowDimension.fontScale,
      statusBarHeight: getStatusBarHeight(),
    };

    setDimension(prevState => {
      if (JSON.stringify(prevState) === JSON.stringify(value)) {
        return prevState;
      }
      return value;
    });
  };

  return (
    <DimensionContext.Provider value={dimension!}>
      <View onLayout={onLayout} style={style.wrapper}>
        {dimension !== null && children}
      </View>
    </DimensionContext.Provider>
  );
};

const style = StyleSheet.create({
  wrapper: {flex: 1, width: '100%', height: '100%'},
});
