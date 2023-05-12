import React, { useState, useEffect, useRef } from 'react';
import "./menuPage.css";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MenuList = (props) => {
    const { t }  = useTranslation(['page']);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        props.handleListClick(index);
    };
    
    return (
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
                t('menu', { returnObjects: true }).map((item) => {
                    const { submenu } = item;
                    return (
                        <React.Fragment key={item.id}>
                            <ListItemButton selected={selectedIndex === item.id}  onClick={(event) => handleListItemClick(event, item.id)}>
                                <ListItemIcon>
                                { submenu?<AddCircleOutlineOutlinedIcon />:<IndeterminateCheckBoxIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                            <Divider />
                            <Collapse in={true} timeout="auto" >
                            <List component="div" disablePadding>
                            {
                                submenu && ( submenu.map((subitem) => {
                                    return (
                                        <React.Fragment key={subitem.id}>
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
    )
}

export default MenuList
