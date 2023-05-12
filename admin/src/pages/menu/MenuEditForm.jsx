import React, { useState, useEffect, useRef } from 'react';
import "./menuPage.css";
import { TextField, Button, Box } from '@mui/material';
import { SaveIcon } from '@mui/icons-material/Save';

const MenuEditForm = (props) => { 
    const inputFile = useRef(null);
    const [formData, setFormData] = useState(props.menuData);
    const [imageFile, setImageFile] = useState(null);

    console.log('formData', formData);

    useEffect(() => {
        
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;        
        /*const newMenu = {...selectedMenu};
        newMenu[name] = value;        
        setSelectedMenu(newMenu);*/
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit value', event.target);
        
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
            alert("file size must not be greater than to 2MB")
        }
        else {
        let imageUrl = URL.createObjectURL(file);
        getImageSize(imageUrl)
        .then(imgSize => {
            if(imgSize.width < 770){
            alert('image width must be larger than 770px');
            URL.revokeObjectURL(imageUrl);
            }
            else{
                setImageFile(file);
                /*const newMenu = {...selectedMenu};
                newMenu['path'] = imageUrl;        
                setSelectedMenu(newMenu);
                setSubmitting(true);
                URL.revokeObjectURL(imageUrl);*/
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
        {
        formData.length && (
            <div className='menuForm'>
            <form onSubmit={handleSubmit}>
                <img className="" src={(formData.path.search('blob:') >= 0)?`${formData.path}`:`http://localhost:3030/${formData.path}`} alt="" onClick={() => inputFile.current.click()}></img> 
                <input type="file" accept=".bmp,.jpg,.jpeg,.png" style={{display: 'none'}} onChange={handleFileChange} ref={inputFile}/>
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <TextField  name="title_de" type="text" label="Description(German)" variant="standard" value={formData.title_de} 
                        onChange={handleInputChange} fullWidth/>
                </Box>
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <TextField  name="title_gb" type="text" label="Description(English)" variant="standard" value={formData.title_gb} 
                        onChange={handleInputChange} fullWidth/>
                </Box>
                <Box sx={{ maxWidth: '100%', mt:5}}>
                    <Button variant="contained" startIcon={<SaveIcon />} color="primary" type="submit" >Save</Button>
                </Box>
            </form>
            </div>
        )}
        </>
    );
}

export default MenuEditForm
