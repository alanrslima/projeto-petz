import {INAAlert} from '~/components';

export interface IAlert extends Omit<INAAlert, 'visible'> {}

export interface IAlertContext {
  show: (props: IAlert) => void;
}
