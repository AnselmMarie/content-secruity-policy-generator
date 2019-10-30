/* Node Modules */
import React from 'react';
import { NavLink } from "react-router-dom";

export default ($this) => {
  return(
    <aside className="side-area">
      <NavLink to="/" activeClassName="active">Start</NavLink>
      <NavLink to="/img-src">img-src</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </aside>
  );
}
