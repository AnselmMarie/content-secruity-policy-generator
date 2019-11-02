/* Node Modules */
import React from 'react';
import { NavLink } from 'react-router-dom';
/* Component Content */
import NavLinks from './navigation.links.json';

export default ($this) => {
  return(
    <nav>
      <ul>
        {NavLinks.map((el, i) => {
          return <li key={i}><NavLink to={el.path}>{el.name}</NavLink></li>;
        })}
      </ul>
    </nav>
  );
}
