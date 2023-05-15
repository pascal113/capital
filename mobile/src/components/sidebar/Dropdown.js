import MenuItems from './MenuItems';
const Dropdown = ({ menu_index, submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          menu_index={menu_index}
          submenu_index={index}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
