import React, {useState} from 'react';
import SideMenubar from '../components/sidebar/SideMenubar';

const MenuPage = () => {
    const [introduceItem, setIntroduceItem] = useState({imgUrl:'./images/menu/menu-page-1.png', descText:'home'});
    
    return (
        <div id="menu_page" className="section">
            <div className="container">
                <div className="menu_page_wrapper">
                    <div className="menu_page_left_col">
                        <SideMenubar setIntroduceItem={setIntroduceItem}/>
                    </div>
                    <div className="menu_page_right_col">
                        <div className='menu_page_img'>
                            <img src={introduceItem.imgUrl} alt="introduce"></img>
                        </div>
                        <h2 className='menu_page_text'>
                            {introduceItem.descText}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage