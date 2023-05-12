import React, { Fragment } from 'react';
import { useState, useEffect, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getMenus, updateMenu } from "../../redux/apiCalls";
import { useTranslation } from 'react-i18next';
import { TextField, Button, FormControl, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const MenuPage = () => {
    const { t }  = useTranslation(['page']);
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menu.menus);
    const inputFile = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState({path: "", image: null, title_de: "",   title_gb: ""});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [file, setFile] = useState([]);
    
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        getMenus(dispatch);
        setSelectedMenu(menus.filter((item) => item.order === 0)[0]);
    }, [dispatch]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;        
        const newMenu = {...selectedMenu};
        newMenu[name] = value;        
        setSelectedMenu(newMenu);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const handleFileChange = e => {
        setFile([...file, e.target.files[0]]);
        setSubmitting(true);
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);      
        setSelectedMenu(menus.filter((item) => item.order === index)[0]);
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
                    t('menu', { returnObjects: true }).map((item) => {
                        const { submenu } = item;
                        return (
                            <React.Fragment key={item.id}>
                                <ListItemButton selected={selectedIndex === item.id}  onClick={(event) => handleListItemClick(event, item.id)}>
                                    <ListItemIcon>
                                    { submenu?<AddCircleOutlineIcon />:<IndeterminateCheckBoxIcon />}
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
            { selectedMenu && (
                <div className='menuForm'>
                    <form onSubmit={handleSubmit}>
                        <img className="" src={`http://localhost:3030/${ selectedMenu.path}`} alt="" onClick={() => inputFile.current.click()}></img> 
                        <input type="file" accept=".bmp,.jpg,.jpeg,.png" style={{display: 'none'}} onChange={handleFileChange} ref={inputFile}/>
                        <Box sx={{ maxWidth: '100%', mt:5}}>
                            <TextField  name="title_de" type="text" label="Description(German)" variant="standard" value={selectedMenu.title_de} 
                                onChange={handleInputChange} fullWidth/>
                        </Box>
                        <Box sx={{ maxWidth: '100%', mt:5}}>
                            <TextField  name="title_gb" type="text" label="Description(English)" variant="standard" value={selectedMenu.title_gb} 
                                onChange={handleInputChange} fullWidth/>
                        </Box>
                        <Box sx={{ maxWidth: '100%', mt:5}}>
                            <Button variant="contained" startIcon={<SaveIcon />} color="primary" type="submit" >Save</Button>
                        </Box>
                    </form>
                </div>
                )
            }
        </div>
        
    );
}

export default MenuPage
