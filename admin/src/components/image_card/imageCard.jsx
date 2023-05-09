// --- Imports --- //
import React from "react";
import "./imageCard.css";
import {Stack, Button} from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function ImageCard({props}) {

  const {id, path} = props;

  const handleSetting = () => {    
  };

  const handleRemove = () => {
    props.onDelete();
  };
  
  return (
    <>
      <div className="imageCard">
        <img src={`http://localhost:3030/${ path}`} alt=""></img>
        <div className="btn">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ m: 1}}>
            <Button variant="outlined" component="label" size="small" startIcon={<EditIcon />} onClick={() => handleSetting()}>
              Setting
              <input hidden accept="image/*" type="file" />
            </Button>
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => handleRemove()}>
              Remove
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}


