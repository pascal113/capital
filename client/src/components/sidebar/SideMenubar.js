import React, { useState } from 'react';
import { menuItems } from '../../data/menuItems';
import MenuItems from './MenuItems';

const SideMenubar = ({ setIntroduceItem }) => {
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
              setIntroduceItem={setIntroduceItem}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenubar;
