import React, {useEffect} from 'react';
import {Modal, View, TouchableOpacity, Animated} from 'react-native';
import {useStyle, useTheme} from '~/hooks';
import {PAlertStyle} from './PAlert.style';
import {PText} from '../PText/PText';
// import {NAButton} from '../NAButton/NAButton';
import {PIcon} from '~/components';

// import {INAButton} from './NAButton';

export interface IPAlert {
  visible: boolean;
  title?: string;
  subTitle?: string;
  onClose?: () => void;
  // buttons?: INAButton[];
}

export const PAlert: React.FC<IPAlert> = props => {
  const {visible, onClose, title, subTitle} = props;

  const style = useStyle(PAlertStyle);

  const {theme} = useTheme();

  const bottom = React.useRef(new Animated.Value(-500)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  const onPressWrapper = () => {
    Animated.parallel([
      Animated.timing(bottom, {
        toValue: -400,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      onClose && onClose();
    });
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bottom, {
        toValue: visible ? 0 : -400,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [visible, bottom, opacity]);

  return (
    <Modal visible={visible} transparent>
      <Animated.View style={[style.container, {opacity}]}>
        <Animated.View style={[style.content, {bottom}]}>
          <View style={style.header}>
            <TouchableOpacity
              onPress={onPressWrapper}
              style={style.headerButton}>
              <PIcon name="x" color={theme.colors.on_surface_secundary} />
            </TouchableOpacity>
          </View>
          <View style={style.body}>
            <PText size="heading_3">{title}</PText>
            <View style={style.wrapperSubTitle}>
              <PText align="center" color={theme.colors.on_surface_secundary}>
                {subTitle}
              </PText>
            </View>
          </View>
          {/* {buttons?.map((button, index) => (
            <View key={index} style={style.wrapperButton}>
              <NAButton
                {...button}
                onPress={() => {
                  onPressWrapper();
                  button.onPress && button.onPress();
                }}
              />
            </View>
          ))} */}
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
