/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IScriptRouteProps extends RouteComponentProps, Partial<ICspFtn_AC>, Partial<ICspState> {
}

export interface IScriptReduxState extends Partial<ICspFtn_AC>, Partial<ICspState>  {
}
