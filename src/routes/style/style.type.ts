/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IStyleRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
  el: string,
  inputName: string,
  i: number,
  checked: boolean,
}

export interface IStyleReduxState extends Partial<ICspFtn_AC>, Partial<ICspState> {
}
