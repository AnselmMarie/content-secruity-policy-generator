/* Node Modules */
import React from 'react';

/**
 * @function getClassName
 * @desc render the checkbox url view
 * @author Anselm Marie
 * @param {string} currentPage - current page from props
 * @return {string}
 */
const getClassName = (currentPage) => {
  return currentPage ? currentPage : window.location.pathname.replace('/', '');
}

/**
 * @function Page Class View
 * @desc render the div to show the current page class view
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
