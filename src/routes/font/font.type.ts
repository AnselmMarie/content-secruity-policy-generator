/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IFontRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
}

export interface IFontReduxState extends Partial<ICspFtn_AC>, Partial<ICspState> {
}