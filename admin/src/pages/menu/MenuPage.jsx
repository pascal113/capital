import React from 'react';
import { useState } from "react";
import "./menuPage.css";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useTranslation } from 'react-i18next';

const MenuPage = () => {
    const { t }  = useTranslation(['page']);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className='menuPage'>
            <div className='menuList'>
            <List
                sx={{ width: '380px', maxWidth: 380, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    </ListSubheader>
                }
                >
                    {
                    t('menu', { returnObjects: true }).map((item, index) => {
                        const { title, subtitle } = item;
                        return (
                            <React.Fragment key={title.id}>
                                <ListItemButton selected={selectedIndex === title.id}  onClick={(event) => handleListItemClick(event, title.id)}>
                                    <ListItemIcon>
                                    { subtitle?<AddCircleOutlineIcon />:<IndeterminateCheckBoxIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={title.label} />
                                </ListItemButton>
                                <Divider />
                                <Collapse in={true} timeout="auto" >
                                <List component="div" disablePadding>
                                {
                                    subtitle && ( subtitle.map((subitem, subindex) => {
                                        return (
                                            <React.Fragment key={subindex}>
                                            <ListItemButton sx={{ pl: 6 }} selected={selectedIndex === subitem.id}  onClick={(event) => handleListItemClick(event, subitem.id)}>
                                                <ListItemIcon>
                                                <IndeterminateCheckBoxIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={subitem.label} />
                                            </ListItemButton>
                                            <Divider />
                                            </React.Fragment>
                                        );
                                    }))
                                }
                                </List>
                            </Collapse>
                            </React.Fragment>
                        );
                    })
                }
                </List>
            </div>
            <div className='menuForm'>
                
            </div>
            
        </div>
        
    );
}

export default MenuPage
