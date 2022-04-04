import React, {useState} from 'react';
import {AlertContext} from './alertContext';
import {IPAlert, PAlert} from '~/components';
import {IAlert} from './type';

export const AlertProvider: React.FC = ({children}) => {
  const [alertProps, setAlertProps] = useState<INAAlert>({visible: false});

  const show = (props: IAlert) => {
    setAlertProps({...props, visible: true});
  };

  const close = () => {
    setAlertProps({visible: false});
  };

  return (
    <AlertContext.Provider value={{show}}>
      <PAlert
        title={alertProps.title}
        subTitle={alertProps.subTitle}
        buttons={alertProps.buttons}
        visible={alertProps.visible}
        onClose={close}
      />
      {children}
    </AlertContext.Provider>
  );
};
