import mongoose from 'mongoose'
import mailSchema from '../schemas/mail.js'

const Mail = mongoose.model('Mail', mailSchema);
export default Mail;