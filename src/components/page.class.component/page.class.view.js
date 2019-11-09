/* Node Module */
import React from 'react';

/**
 * @function getClassName
 * @desc determines if the class name will be from the param or the window location
 * @author Anselm Marie
 * @param {string} currentPage - current page from props
 * @return {string}
 */
const getClassName = (currentPage) => {
  return currentPage ? currentPage : window.location.pathname.replace('/', '');
}

/**
 * @function Page Class View
 * @desc dynamically display a class based on the current page
 * @author Anselm Marie
 * @param {object} props - content from the parent component
 * @return {JSX.Element}
 */
export default (props) => {
  return (
    <div className={`app-contents ${getClassName(props.currentPage)}`}>
      {props.children}
    </div>
  )
};
