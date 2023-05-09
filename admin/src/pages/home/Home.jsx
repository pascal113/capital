import "./home.css";
import ImageCard from "../../components/image_card/imageCard";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import {Button} from '@mui/material';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux";
import { deleteSlider, getSliders } from "../../redux/apiCalls";

export default function Home() {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.slider.sliders.data);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);

  const handleRemove = (id) => {
    deleteSlider(id, dispatch);
  };

  const handleCreate = ({ target }) => {    
  };


  return (
    <div className="home">
      <div className="addHomeBtn">
        <Button variant="contained" component="label" size="medium" color="success" startIcon={<AddIcon />} onClick={() => handleCreate()}>
          Create
          <input hidden accept="image/*" type="file" />
        </Button>
      </div>
      <div className="homeWidgets">
        {
          sliders.map((item, index) => (
            <ImageCard key={index} props={item} onDelete={handleRemove}/>
          ))
        }
      </div>
    </div>
  );
}
