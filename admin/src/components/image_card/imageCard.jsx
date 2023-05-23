// --- Imports --- //
import React, {useState} from "react";
import "./imageCard.css";
import {Stack, Button} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmDialog from '../confirm/ConfirmDialog';
import { getBaseURL } from "../../requestMethods";
import { useTranslation } from 'react-i18next';

export default function ImageCard(props) {
  const { t }  = useTranslation(['page']);
  const {item, onEdit, onDelete} = props;
  const [confirmOpen, setConfirmOpen] = useState(false);
  
  async function getImageSize(imageUrl) {
    let img = new Image();
    img.src = imageUrl;
    await img.decode();
    let width = img.width;
    let height = img.height;
    return {width,height};
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file.size/(1024*1024) > 2) {
      alert(t('messages.file_2MB'))
    }
    else {
      let imageUrl = URL.createObjectURL(file);
      getImageSize(imageUrl)
      .then(imgSize => {
        if(imgSize.width < 1440){
          alert(t('messages.image_width'))
        }
        else{
          const formData = new FormData();
          formData.append("image", file);
          onEdit(item._id, formData);
        }
      })
      .catch((error) => {
        alert(error);
      })
    }
    e.target.value = null;
  };

  const handleSetting = (e) => {    
    //event.target.value = null
  };

  const handleRemove = () => {
    onDelete(item._id)
  };

  const confirmRemove = () => {
    setConfirmOpen(true);
  }
  
  return (
    <>
      <div className="imageCard">
        <img src={`${getBaseURL() + item.path}`} alt=""></img>
        <div className="btn">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ m: 1}}>
            <Button variant="outlined" component="label" size="small" startIcon={<EditIcon />} onClick={handleSetting}>
              {t('edit')}
              <input type="file" accept=".bmp,.jpg,.jpeg,.png" hidden onChange={handleFileInput}/>
            </Button>
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={confirmRemove}>
            {t('remove')}
            </Button>
            <ConfirmDialog
              title={t('messages.warning')}
              open={confirmOpen}
              setOpen={setConfirmOpen}
              onConfirm={handleRemove}
            >
              {t('messages.confirm_delete')}
            </ConfirmDialog>
            
          </Stack>
        </div>
      </div>
    </>
  );
}


