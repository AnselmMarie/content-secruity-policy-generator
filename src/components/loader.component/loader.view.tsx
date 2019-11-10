/* Node Module */
import React from 'react';
/* Component Content */
import { TLoaderProps } from './loader.type';
import './loader.scss';

/**
 * @function Loader View
 * @desc show/hide loader based on loader store
 * @param props - global property data
 */
export default (props: TLoaderProps): JSX.Element => {
  return (
    <>
      {props.loaderData.isLoaderShown && <div className="loader-bg">
        <div className="loader"></div>
      </div>}
    </>
  )
}
