// --- Imports --- //
import React from "react";
import "./imageCard.css";
import {Box, Stack, Button} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import imageContent from "../../assets/images/home/home-slider-1.png";

export default function ImageCard() {

  const handleSetting = () => {
    console.log('asdf');
    
  };
  
  return (
    <>
      <div className="imageCard">
        <img src={imageContent} alt=""></img>
        <div className="btn">
        
          <Stack direction="row" alignItems="center" spacing={2} sx={{ m: 1}}>
          <Button variant="outlined" component="label" size="small" startIcon={<EditIcon />} onClick={() => handleSetting()}>
            Setting
            <input hidden accept="image/*" type="file" />
          </Button>
          <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />}>
            Remove
          </Button>
          </Stack>
        </div>
      </div>
      </>
  );
}


