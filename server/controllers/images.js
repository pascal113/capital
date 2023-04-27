import Image from '../models/image.js'
import asyncHandler from 'express-async-handler';
import {responseClient} from '../utils/util.js'

// Add an image
const add_image = asyncHandler(async (req, res) => {
    const {
      path,
      type,
      index,
      title,
      description
    } = req.body;
  
    const image = await Image.create({
      path,
      type,
      index,
      title,
      description
    });
  
    if (image) {
      responseClient(res, 201, 0, 'Image added successfully');
    } else {
      responseClient(res, 400, 0, 'Invalid image data');
    }
  });
  
  // Update an image
  const update_image = asyncHandler(async (req, res) => {
    const {
      id,
      path,
      type,
      index,
      title,
      description
    } = req.body;
  
    const image = await Image.findByIdAndUpdate(id, {
      path,
      type,
      index,
      title,
      description
    }, {
      new: true
    });
  
    if (image) {
      responseClient(res, 200, 0, 'Image updated successfully');
    } else {
      responseClient(res, 404, 0, 'Image not found');
    }
  });
  
  // Delete an image
  const delete_image = asyncHandler(async (req, res) => {
    const {
      id
    } = req.body;
  
    const image = await Image.findByIdAndDelete(id);
  
    if (image) {
      responseClient(res, 200, 0, 'Image deleted successfully');
    } else {
      responseClient(res, 404, 0, 'Image not found');
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
    const images = await Image.find();
  
    if (images) {
      responseClient(res, 200, 0, images);
    } else {
      responseClient(res, 404, 0, 'No images found');
    }
  });

  export { add_image, update_image, delete_image, get_image, get_image_list };