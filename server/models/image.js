import mongoose from 'mongoose'
import imageSchema from '../schemas/image'

module.exports = mongoose.model('Image',imageSchema);