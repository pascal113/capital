import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import commonContext from '../../contexts/common/commonContext';
import imgGermany from "../../assets/images/header/DE.png";
import imgEngland from "../../assets/images/header/GB.png";
import i18n from "i18next";

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
                    width: 32,
                    height: 32,
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
                    <ListItemIcon>
                        <LanguageIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText>Deutsch</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => {setLanguage('GB'); i18n.changeLanguage('gb');}}>
                    <ListItemIcon>
                        <LanguageIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText>English</ListItemText>
                </MenuItem>
            </Menu> 
        </>
    );
}
