import mongoose from 'mongoose'
import jobSchema from '../schemas/job'

module.exports = mongoose.model('Job',jobSchema);