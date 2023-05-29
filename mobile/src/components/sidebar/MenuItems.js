import { useState, useEffect, useRef,useContext } from 'react';
import Dropdown from './Dropdown';
import { Link, useLocation } from 'react-router-dom';
import menuContext from '../../contexts/menu/menuContext';
import commonContext from '../../contexts/common/commonContext';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const MenuItems = ({ menu_index, submenu_index, items, depthLevel}) => {
  const { t }  = useTranslation(['page']);
  const [dropdown, setDropdown] = useState(false);
  const { hoverItem } = useContext(menuContext);
  const { curLanguage } = useContext(commonContext);

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

    let value = curLanguage;
    
    if (value === 'DE') {
      if(item.imgUrl || item.descText) {
        hoverItem({'imgUrl': item.imgUrl,  'descText':item.descText});
      }
    }
    else {
      if(item.imgUrl || item.descTextEn) {
        hoverItem({'imgUrl': item.imgUrl,  'descText':item.descTextEn});
      }
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
    if (isMobile()) {
      changeIntroduceItem(items);
      setDropdown(true);
    }

    dropdown && setDropdown(false);
  };

  function isMobile() {
    return window.innerWidth < 768;
  }

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
            className='main_menu'
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={(prev) => setDropdown(!prev)}
          >
            {t(`menu.${menu_index}.title`)}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            menu_index={menu_index}
          />
        </>
      ) : (
          <Link to={items.url}>{t(`menu.${menu_index}.subtitle.${submenu_index}`)}</Link>
      )}
    </li>
  );
};

export default MenuItems;
