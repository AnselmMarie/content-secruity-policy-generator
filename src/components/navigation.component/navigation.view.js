/* Node Modules */
import React from 'react';
import { NavLink } from "react-router-dom";

export default ($this) => {
  return(
    <aside className="side-area">
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <NavLink to="/">Start</NavLink>
      <NavLink to="/img-src">img-src</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </aside>
  );
}
