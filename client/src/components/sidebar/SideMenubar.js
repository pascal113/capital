import React, { useState } from 'react';
import { menuItems } from '../../data/menuItems';
import MenuItems from './MenuItems';

const SideMenubar = () => {

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenubar;
