import mongoose from 'mongoose'
import jobSchema from '../schemas/job.js'

const Job = mongoose.model('Job', jobSchema);
export default Job;