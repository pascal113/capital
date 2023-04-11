import { useState, useEffect, useRef, useContext } from 'react';
import Dropdown from './Dropdown';
import commonContext from '../../contexts/common/commonContext';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = ({ items, depthLevel, setIntroduceItem }) => {
  const [dropdown, setDropdown] = useState(false);
  const { menuOpen, setMenuOpen } = useContext(commonContext);

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
    
    if(items.imgUrl || items.descText) {
      //setIntroduceItem({'imgUrl': items.imgUrl,  'descText':items.descText});
    }
  };

  const onMouseEnter = () => {
    
    if(!items.submenu) {
      changeIntroduceItem(items);
    } else if(items.submenu) {
      changeIntroduceItem(items.submenu[0]);
    }
    
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
            onClick={() => setDropdown((prev) => !prev)}
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
            onClick={() => setDropdown((prev) => !prev)}
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
