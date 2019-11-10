/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import {
  ICspState,
  ICspFtn_AC,
} from '../../store/csp/csp.type';

export interface IGenerateProps extends RouteComponentProps, Partial<ICspFtn_AC> {
  cspData: ICspState,
}

export type TGenerateState = {
  cspGenerate: string,
  defaultData: string,
  imgData: string,
  styleData: string,
  scriptData: string,
  frameData: string,
  fontData: string,
}

export type TSrcData = {
  data: string|undefined,
  name: string,
}

export type TDisplaySrcProps = {
  data: string,
}
