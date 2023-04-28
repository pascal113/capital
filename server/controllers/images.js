import Image from '../models/image.js'
import asyncHandler from 'express-async-handler';
import {responseClient} from '../utils/util.js'

// Add an image
const add_image = asyncHandler(async (req, res) => {

  try {
    const {
      path,
      type,
      index,
      title,
      description
    } = req.body;

    const image = await Image.findOne({
      path: path,
      type: type
    });

    if (image === null || image.length === 0) {
      const addImage = await Image.create({
        path,
        type,
        index,
        title,
        description
      });
    
      const resData = await addImage.save();
      console.log('ok');
      responseClient(res,200,0,'Save success',resData);
    }
    else {
      console.log(job);
      responseClient(res,200,0,'Image already exist');
    }
  }
  catch (error) {
    console.log(err);
    responseClient(res);
  }

});
  
  // Update an image
const update_image = asyncHandler(async (req, res) => {

  try {
    const imageId = req.params.id;

    const image = await Image.findById(imageId);
    if (!image) {
      responseClient(res, 404, 1, 'Image not found');
      return;
    }

    const { path, type, index, title, description } = req.body;
    image.path = path || image.path;
    image.type = type || image.type;
    image.index = index || image.index;
    image.title = title || image.title;
    image.description = description || image.description;

    await image.save();
    responseClient(res, 200, 0, 'Image updated successfully', job);
  }
  catch (error) {
      console.log(err);
      responseClient(res);
  }

});
  
// Delete an image
const delete_image = asyncHandler(async (req, res) => {

  try {
    const imageId = req.params.id;  
    const image = await Image.findById(imageId);
    if (!image) {
      responseClient(res, 404, 1, 'Image not found');
      return;
    }

    await image.remove();
    responseClient(res, 200, 0, 'Image deleted successfully');
  }
  catch (error) {
      console.log(err);
      responseClient(res);
  }
});

const get_image = asyncHandler(async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);

    if (!image) {
      responseClient(res, 404, 1, 'Image not found');
      return;
    }

    responseClient(res, 200, 0, 'Success', image);
  } catch (error) {
    console.error(error);
    responseClient(res);
  }
});
  
// Get a list of images
const get_image_list = asyncHandler(async (req, res) => {

  try {
    const images = await Image.find();

    if (images) {
      responseClient(res, 200, 0, images);
    } else {
      responseClient(res, 404, 0, 'No images found');
    }
  }
  catch (error) {
      console.log(err);
      responseClient(res);
  } 

});

export { add_image, update_image, delete_image, get_image, get_image_list };