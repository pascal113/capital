import "./sidebar.css";
import React from 'react';
import { useState } from "react";
import * as Muicon from "@mui/icons-material";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { t }  = useTranslation(['page']);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {
              t('sidebar', { returnObjects: true }).map((item, index) => {
                const MyIcon = Muicon[`${item.icon}`];
                return (
                  <Link to={item.link} className="link" key={index}>
                    <li className={selectedIndex === item.id ? 'sidebarListItem active' : 'sidebarListItem'} onClick={(event) => handleListItemClick(event, item.id)}>
                      <MyIcon fontSize="large" sx={{ px: 1 }} className="sidebarIcon">{item.icon}</MyIcon>
                        {item.label}
                    </li>
                  </Link>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
