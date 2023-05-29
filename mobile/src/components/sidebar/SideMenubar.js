import React, { useState } from 'react';
import MenuItems from './MenuItems';

const SideMenubar = (props) => {

  const { menuData } = props;
  const menuItems = menuData;

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              menu_index={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenubar;
