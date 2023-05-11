import "./home.css";
import ImageCard from "../../components/image_card/imageCard";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import {Button} from '@mui/material';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux";
import { deleteSlider, getSliders, updateSlider, addSlider } from "../../redux/apiCalls";


export default function Home() {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.slider.sliders);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);

  const handleEdit = (id, slider) => {
    updateSlider(id, slider, dispatch);
  };

  const handleRemove = (id) => {
    deleteSlider(id, dispatch);
  };

  const handleCreate = (e) => {
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
          formData.append("index", sliders.length + 1);
          formData.append("type", 'banner');
          formData.append("image", file);
          addSlider(sliders.length, 'banner', formData, dispatch);
        }
      })
      .catch((error) => {
        alert(error);
      })
    }
    e.target.value = null; 
  };

  async function getImageSize(imageUrl) {
    let img = new Image();
    img.src = imageUrl;
    await img.decode();
    let width = img.width;
    let height = img.height;
    return {width,height};
  };


  return (
    <div className="home">
      <div className="addHomeBtn">
        <Button variant="contained" component="label" size="medium" color="success" startIcon={<AddIcon />}>
          Create
          <input type="file" accept=".bmp,.jpg,.jpeg,.png" hidden onChange={handleCreate}/>
        </Button>
      </div>
      <div className="homeWidgets">
        {
          sliders.map((item, index) => (
            <ImageCard key={index} item={item} onDelete={handleRemove} onEdit={handleEdit}/>
          ))
        }
      </div>
    </div>
  );
}
