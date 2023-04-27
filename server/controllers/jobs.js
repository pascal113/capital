import Job from '../models/job.js'
import asyncHandler from 'express-async-handler';
import {responseClient} from '../utils/util.js'

const add_job = asyncHandler( async (req, res) => {
    const {
        title,
        type,
        location,
        field
    } = req.body;

    try {
        const job = await Job.findOne({
            title: title,
            type: type,
            location: location
        });
    
        if (job === null || job.length === 0) {
            const addJob = await Job.create({
                title,
                type,
                location,
                field
            });
        
            const resData = await addJob.save();
            console.log('ok');
            responseClient(res,200,0,'Save success',resData);
        }
        else {
            console.log(job);
            responseClient(res,200,0,'Job already exist');
        }
    }
    catch (error) {
        console.log(err);
        responseClient(res);
    }
});

// Update a job
const update_job = asyncHandler(async (req, res) => {
    const jobId = req.params.id;
    console.log('update_job'.jobId);
  
    try {
      const job = await Job.findById(jobId);
      if (!job) {
        responseClient(res, 404, 1, 'Job not found');
        return;
      }
  
      const { title, type, location, field } = req.body;
      job.title = title || job.title;
      job.type = type || job.type;
      job.location = location || job.location;
      job.field = field || job.field;
  
      await job.save();
      responseClient(res, 200, 0, 'Job updated successfully', job);
    } catch (error) {
      console.log(error);
      responseClient(res);
    }
});
  
// Delete a job
const delete_job = asyncHandler(async (req, res) => {
    const jobId = req.params.id;  
    try {
      const job = await Job.findById(jobId);
      if (!job) {
        responseClient(res, 404, 1, 'Job not found');
        return;
      }
  
      await job.remove();
      responseClient(res, 200, 0, 'Job deleted successfully');
    } catch (error) {
      console.log(error);
      responseClient(res);
    }
});

const get_job = asyncHandler(async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);

        if (!job) {
        responseClient(res, 404, 1, 'Job not found');
        return;
        }

        responseClient(res, 200, 0, 'Success', job);
    } catch (error) {
        console.error(error);
        responseClient(res);
    }
});
  
// Get a list of jobs
const get_job_list = asyncHandler(async (req, res) => {
    const { type, location, field } = req.body;    
    const jobs = await Job.find({
        type: type,
        location: location,
        field: field
    });

    if (jobs) {
        responseClient(res, 200, 0, jobs);
    } else {
        responseClient(res, 404, 0, 'No jobs found');
    }
});

export { add_job, update_job, delete_job, get_job, get_job_list };