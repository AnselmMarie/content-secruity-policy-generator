/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IObjectRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
}

export interface IObjectReduxState extends Partial<ICspFtn_AC>, Partial<ICspState> {
}
