import React, {useState} from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from "../../redux/apiCalls";
import LanguageMenu from '../popup_menu/LanguageMenu';
import UserPopupMenu from '../popup_menu/UserPopupMenu';

export default function Topbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    console.log('logout');
    logout(dispatch, history);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">GC Pharma GmbH</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <LanguageMenu></LanguageMenu>
            <UserPopupMenu handleLogout={handleLogout}></UserPopupMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
