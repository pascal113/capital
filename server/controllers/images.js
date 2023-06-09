import asyncHandler from 'express-async-handler';
import {responseClient, getRootPath, deleteImageFile} from '../utils/libs.js'
import Image from '../models/image.js'


// Add an image
const add_image = asyncHandler(async (req, res) => {

  try {
    const {
      type,
      index
    } = req.body;

    let path = req.file.path;

    const addImage = await Image.create({
      path,
      type,
      index
    });
  
    // const resData = await addImage.save();
    responseClient(res,200,0,'Save success',addImage);

    // const image = await Image.findOne({
    //   index: index,
    //   type: type
    // });

    // if (image) {
    //   console.log(image);
    //   responseClient(res,200,0,'Image already exist');
    // }

  }
  catch (error) {
    console.log(error);
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

    let rootPath = getRootPath();
    console.log(rootPath);

    console.log(rootPath + image.path);

    deleteImageFile(rootPath + image.path);

    let path = '';
    if(req.file) {
      path = req.file.path;
    }
    
    const { type, title_de, title_gb } = req.body;
    image.path = path || image.path;
    image.type = type || image.type;
    image.title_de = title_de || image.title_de;
    image.title_gb = title_gb || image.title_gb;

    await image.save();
    responseClient(res, 200, 0, 'Image updated successfully', image);
  }
  catch (error) {
      console.log(error);
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
      console.log(error);
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

    const { type } = req.query;
    const filter = {};

    if (type) {
        filter.type = type;
    }

    // const images = await Image.find(filter).sort({createdAt:-1});
    const images = await Image.find(filter);

    if (images) {
      responseClient(res, 200, 0, 'success', images);
    } else {
      responseClient(res, 404, 1, 'No images found');
    }
  }
  catch (error) {
      console.log(error);
      responseClient(res);
  } 

});

export { add_image, update_image, delete_image, get_image, get_image_list };