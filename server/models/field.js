import mongoose from 'mongoose'
import fieldSchema from '../schemas/field.js'

const Field = mongoose.model('Field', fieldSchema);
export default Field;