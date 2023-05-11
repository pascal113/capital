// --- Imports --- //
import React, {useState} from "react";
import "./imageCard.css";
import {Stack, Button} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmDialog from '../confirm/ConfirmDialog';


export default function ImageCard(props) {
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
      alert("file size must not be greater than to 2MB")
    }
    else {
      let imageUrl = URL.createObjectURL(file);
      getImageSize(imageUrl)
      .then(imgSize => {
        if(imgSize.width < 1440){
          alert('image width must be larger than 1440px');
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
        <img src={`http://localhost:3030/${ item.path}`} alt=""></img>
        <div className="btn">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ m: 1}}>
            <Button variant="outlined" component="label" size="small" startIcon={<EditIcon />} onClick={handleSetting}>
              Setting
              <input type="file" accept=".bmp,.jpg,.jpeg,.png" hidden onChange={handleFileInput}/>
            </Button>
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={confirmRemove}>
              Remove
            </Button>
            <ConfirmDialog
              title="Delete Post?"
              open={confirmOpen}
              setOpen={setConfirmOpen}
              onConfirm={handleRemove}
            >
              Are you sure you want to delete this image?
            </ConfirmDialog>
            
          </Stack>
        </div>
      </div>
    </>
  );
}


