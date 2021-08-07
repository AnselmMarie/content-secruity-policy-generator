/* Node Module */
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
/* Component Content */
import NavLinks from './navigation.links';
import { TNavigationProps, TNavLinks } from './navigation.type';
import './navigation.style.scss';

/**
 * @property NavLinksData
 * @desc data of the nav links
 */
const NavLinksData: TNavLinks[] = NavLinks;

/**
 * @function Navigation View
 * @desc render the navigation view
 * @param props - parent information data
 */
export default (props: TNavigationProps): ReactElement => {
  return (
    <nav>
      <div className="active-state"></div>
      <ul>
        {NavLinksData.map((el, i: number) => {
          return (
            <li key={i}>
              <NavLink
                exact
                onClick={() => props.currentPage_AC(el)}
                to={el.path}
              >
                {el.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
