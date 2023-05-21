import mongoose from 'mongoose'
import typeSchema from '../schemas/type.js'

const Type = mongoose.model('Type', typeSchema);
export default Type;