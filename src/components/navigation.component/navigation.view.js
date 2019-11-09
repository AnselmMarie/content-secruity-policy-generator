/* Node Module */
import React from 'react';
import { NavLink } from 'react-router-dom';
/* Component Content */
import NavLinks from './navigation.links.json';

/**
 * @function Navigation View
 * @desc render the navigation view
 * @author Anselm Marie
 * @param {object} props - parent information data
 * @return {JSX.Element}
 */
export default (props) => {
  return(
    <nav>
      <ul>
        {NavLinks.map((el, i) => {
          return <li key={i}><NavLink onClick={() => props.currentPage_AC(el)} to={el.path}>{el.name}</NavLink></li>;
        })}
      </ul>
    </nav>
  );
}
