import React from "react";
import "./topbar.css";
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { NotificationsNone, Language } from "@material-ui/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">GC Pharma GmbH</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Language fontSize="large"/>
          </div>
          <div className="topbarIconContainer">
            <IconButton aria-label="add an alarm">
            <AccountCircleIcon fontSize="large" />
            </IconButton>
            <div className="topDropdownmenu">
              <Paper sx={{ width: 320, maxWidth: '100%' }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <VpnKeyIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Change Password</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
