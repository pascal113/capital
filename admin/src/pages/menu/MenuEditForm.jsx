import React, { useState, useEffect, useRef } from 'react';
import "./menuPage.css";
import { TextField, Button, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from "react-redux";
import { updateMenu } from "../../redux/apiCalls";
import { getBaseURL } from "../../requestMethods";
import { useTranslation } from 'react-i18next';

const MenuEditForm = (props) => { 
    const { t }  = useTranslation(['page']);
    const dispatch = useDispatch();
    
    const {menus, selectedIndex} = props;    
    const [formData, setFormData] = useState({id: '',  path: '', title_de:'',  title_gb: '' });
    const inputFile = useRef(null);
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        setFormData(menus.filter((item) => item.order === selectedIndex)[0]);
        setImageFile(null);
    }, [selectedIndex]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;        
        /*const newMenu = {...formData};
        newMenu[name] = value;        
        setFormData(newMenu);*/
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { title_de, title_gb } = e.target.elements;

        const form = new FormData();
        form.append("type", 'hamburger');
        form.append("title_de", title_de.value);
        form.append("title_gb", title_gb.value);
        
        if(imageFile !== null){
            form.append("image", imageFile);
        }

        updateMenu(formData._id, form, dispatch);
    };

    async function getImageSize(imageUrl) {
        let img = new Image();
        img.src = imageUrl;
        await img.decode();
        let width = img.width;
        let height = img.height;
        return {width,height};
    };

    const handleFileChange = e => {
        const file = e.target.files[0];
        
        if (file.size/(1024*1024) > 2) {
            alert(t('messages.file_2MB'))
        }
        else {
        let imageUrl = URL.createObjectURL(file);
        getImageSize(imageUrl)
        .then(imgSize => {
            if(imgSize.width < 1110){
                alert(t('messages.image_width_1110'))
            URL.revokeObjectURL(imageUrl);
            }
            else{
                setImageFile(file);
                setFormData({...formData, path: imageUrl});
                URL.revokeObjectURL(imageUrl);
            }
        })
        .catch((error) => {
            alert(error);
            URL.revokeObjectURL(imageUrl);
        })
        }
        e.target.value = null; 
    }

    return (
        <>
        {formData && (
            <div className='menuForm'>
            <form onSubmit={handleSubmit}>
                <img className='imageFile' src={(formData.path.search('blob:') >= 0)?`${formData.path}`:`${getBaseURL() + formData.path}`} alt="" onClick={() => inputFile.current.click()}></img> 
                <input type="file" accept=".bmp,.jpg,.jpeg,.png" style={{display: 'none'}} onChange={handleFileChange} ref={inputFile}/>
                
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <TextField  name="title_de" type="text" label={t('description_german')} variant="standard" value={formData.title_de} 
                        onChange={handleInputChange} fullWidth/>
                </Box>
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <TextField  name="title_gb" type="text" label={t('description_english')} variant="standard" value={formData.title_gb} 
                        onChange={handleInputChange} fullWidth/>
                </Box>
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <Button variant="contained" startIcon={<SaveIcon />} color="primary" type="submit" >{t('save')}</Button>
                </Box>
            </form>
        </div>
        )}
        </>
    );
}

export default MenuEditForm
