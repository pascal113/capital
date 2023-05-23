import React, {useState} from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout, changePassword } from "../../redux/apiCalls";
import LanguageMenu from '../popup_menu/LanguageMenu';
import UserPopupMenu from '../popup_menu/UserPopupMenu';

export default function Topbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch, history);
  };

  const handleChangePassword = (data) => {
    console.log('new password', data);
    changePassword(dispatch, data, history);
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
            <UserPopupMenu handleLogout={handleLogout} handleChangePassword={handleChangePassword}></UserPopupMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
