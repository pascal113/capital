import React, {useContext} from 'react';
import {
    Box,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Typography,
    ListItemText,
    ListItemIcon,
    ListItem,
    ListItemAvatar
} from '@mui/material';

import commonContext from '../../contexts/common/commonContext';
import i18n from "i18next";
import LanguageIcon from '@mui/icons-material/Language';
import imgGermany from "../../assets/images/header/DE.png";
import imgEngland from "../../assets/images/header/GB.png";


export default function LanguageMenu() {
    const { curLanguage, setLanguage } = useContext(commonContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ mr: 1 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar src={curLanguage==='DE'?imgGermany:imgEngland} sx={{ width: 24, height: 24 }}/>
                </IconButton>
                <Typography sx={{ minWidth: 100 }}>{curLanguage==='DE'?'Deutsch':'English'}</Typography>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 24,
                    height: 24,
                    ml: 1,
                    mr: -0.5,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => {setLanguage('DE'); i18n.changeLanguage('de');}}>
                    <ListItem sx={{ p: 0, }}>
                        <Avatar alt="german" src={imgGermany}/>
                        <ListItemText sx={{ ml: 3 }}>Deutsch</ListItemText>
                    </ListItem>
                </MenuItem>

                <MenuItem onClick={() => {setLanguage('GB'); i18n.changeLanguage('gb');}}>
                    <ListItem sx={{ p: 0, }}>
                    <Avatar alt="english" src={imgEngland} />
                        <ListItemText sx={{ ml: 3 }}>English</ListItemText>
                    </ListItem>
                </MenuItem>
            </Menu> 
        </>
    );
}
