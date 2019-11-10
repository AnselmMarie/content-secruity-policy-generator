/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IFrameRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
}

export interface IFrameReduxState extends Partial<ICspFtn_AC>, Partial<ICspState> {
}
