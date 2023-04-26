import mongoose from 'mongoose'
import imageSchema from '../schemas/image.js'

const Image = mongoose.model('Image', imageSchema);
export default Image;