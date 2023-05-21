import mongoose from 'mongoose'
import locationSchema from '../schemas/location.js'

const Location = mongoose.model('Location', locationSchema);
export default Location;