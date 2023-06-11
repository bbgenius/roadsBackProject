import logo from '../images/logo.svg';
import { useRef } from 'react';
import React from 'react';
import { pageLinks } from '../data';
import PageLink from './PageLinks';
import NavIcon from './NavIcon';
const Navbar = () => {
  const elementRef = useRef(null);
  const handleToggle = function () {
    elementRef.current.classList.toggle('toggle_navlinks');
  };
  return (
    <React.Fragment>
      <nav className='navbar'>
        <nav className='nav_center'>
          <img
            src={logo}
            alt='Backroads'
            className='nav_logo'
          />
          <ul
            className='nav_links'
            ref={elementRef}
          >
            {pageLinks.map((linkPage) => {
              return (
                <PageLink
                  link={linkPage}
                  itemClass='link'
                />
              );
            })}
          </ul>
          <NavIcon />
        </nav>
        <button
          className='toggle_button'
          onClick={handleToggle}
        >
          <i className='fa-solid fa-bars'></i>
        </button>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
