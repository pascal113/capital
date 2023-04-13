import { useState, useEffect, useRef,useContext } from 'react';
import Dropdown from './Dropdown';
import { Link, useLocation } from 'react-router-dom';
import menuContext from '../../contexts/menu/menuContext';

const MenuItems = ({ items, depthLevel}) => {
  const [dropdown, setDropdown] = useState(false);
  const { hoverItem } = useContext(menuContext);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const changeIntroduceItem = (item) => {

    if(item.imgUrl || item.descText) {
      hoverItem({'imgUrl': item.imgUrl,  'descText':item.descText});
    }
  };

  const onMouseEnter = () => {
    changeIntroduceItem(items);
    window.innerWidth > 960 && setDropdown(true);    
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={`menu-items ${!items.submenu ? 'submenu' : ''}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={(prev) => setDropdown(!prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={(prev) => setDropdown(!prev)}
          >
            {items.title}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
