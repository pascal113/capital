import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SideMenubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar">
        <button className="sidebar__toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`sidebar__list ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="submenu">
            <button className="submenu__toggle">Menu</button>
            <ul className="submenu__list">
              <li>
                <NavLink to="/menu/item1" activeClassName="active">
                  Item 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu/item2" activeClassName="active">
                  Item 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu/item3" activeClassName="active">
                  Item 3
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenubar;
