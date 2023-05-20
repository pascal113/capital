import Job from '../models/job.js'
import asyncHandler from 'express-async-handler';
import {responseClient, splitStringToArray} from '../utils/libs.js'

const makeJobAboutJSONData = (params) => {
    let about_data = {};

    about_data.introduction = params.introduction;

    about_data.content = [];            
    let content_waiting_for_you = {};
    content_waiting_for_you.title = 'DAS ERWARTET DICH:';
    content_waiting_for_you.subtitle = '';
    // content_waiting_for_you.detail = content_waiting_for_you_detail;
    content_waiting_for_you.detail = splitStringToArray(params.content_waiting_for_you_detail, '\n'); 
    about_data.content.push(content_waiting_for_you);

    let content_bring_with_you = {};
    content_bring_with_you.title = 'DAS BRINGST DU MIT:';
    content_bring_with_you.subtitle = '';
    // content_bring_with_you.detail = content_bring_with_you_detail;
    content_bring_with_you.detail = splitStringToArray(params.content_bring_with_you_detail, '\n'); 
    about_data.content.push(content_bring_with_you);

    let content_we_offer_you = {};
    content_we_offer_you.title = 'DAS BIETEN WIR DIR:';
    content_we_offer_you.subtitle = params.content_we_offer_you_subtitle;
    // content_we_offer_you.detail = content_we_offer_you_detail;
    content_we_offer_you.detail = splitStringToArray(params.content_we_offer_you_detail, '\n');
    about_data.content.push(content_we_offer_you);

    about_data.info = {};
    // about_data.info.contact = info_contact;
    about_data.info.contact = splitStringToArray(params.info_contact, '\n');
    // about_data.info.comment = info_comment;
    about_data.info.comment = splitStringToArray(params.info_comment, '\n');

    return about_data;
};

const add_job = asyncHandler( async (req, res) => {

    try {
        const {
            title,
            type,
            location,
            field
        } = req.body;

        const job = await Job.findOne({
            title: title,
            type: type,
            location: location
        });
    
        if (job === null || job.length === 0) {

            let about_data = makeJobAboutJSONData(req.body);    
            console.log(about_data);

            let about = JSON.stringify(about_data);
            console.log(about);

            const addJob = await Job.create({
                title,
                type,
                location,
                field,
                about
            });

            let job_json_data = JSON.parse(JSON.stringify(addJob));
            if(addJob.about) {
                job_json_data.about = JSON.parse(addJob.about);
            }
            responseClient(res,200,0,'Save success',job_json_data);

            // responseClient(res,200,0,'Save success');
        }
        else {
            console.log(job);
            responseClient(res,200,1,'Job already exist');
        }
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

// Update a job
const update_job = asyncHandler(async (req, res) => {    
  
    try {
      const jobId = req.params.id;
      const job = await Job.findById(jobId);
      if (!job) {
        responseClient(res, 404, 1, 'Job not found');
        return;
      }
  
      const {
        title,
        type,
        location,
        field
      } = req.body;

      let job_about_data = makeJobAboutJSONData(req.body);
      let about = JSON.stringify(job_about_data);

      job.title = title || job.title;
      job.type = type || job.type;
      job.location = location || job.location;
      job.field = field || job.field;
      job.about = about || job.about;
      
      await job.save();

      let job_json_data = JSON.parse(JSON.stringify(job));
      if(job.about) {
          job_json_data.about = JSON.parse(job.about);
      }   

      responseClient(res, 200, 0, 'Job updated successfully', job_json_data);
    } catch (error) {
      console.log(error);
      responseClient(res);
    }
});
  
// Delete a job
const delete_job = asyncHandler(async (req, res) => {    
    try {
      const jobId = req.params.id;  
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

        let job_json_data = JSON.parse(JSON.stringify(job));
        if(job.about) {
            job_json_data.about = JSON.parse(job.about);
        }   
        // job_json_data.field = job.field ? job.field.split(',') : [];
           
        console.log(job_json_data);

        responseClient(res, 200, 0, 'Success', job_json_data);
    } catch (error) {
        console.error(error);
        responseClient(res);
    }
});
  
// Get a list of jobs
const get_job_list = asyncHandler(async (req, res) => {    
    
    try {
        console.log('get_job_list');
        const { type, location, field } = req.body;
        const filter = {};

        if (type) {
            filter.type = type;
        }
    
        if (location) {
            filter.location = location;
        }
    
        if (field) {
            const fieldArray = field ? field.split(',') : [];
            filter.field = {$in: fieldArray};
        }
    
        // const jobs = await Job.find(filter).sort({createdAt:-1});
        const jobs = await Job.find(filter);
        
        let data_job_list = [];
        jobs.forEach((job) => {            
            let job_json_data = JSON.parse(JSON.stringify(job));
            if(job.about) {
                job_json_data.about = JSON.parse(job.about);
            }
            
            // job_json_data.field = job.field ? job.field.split(',') : [];
            
            data_job_list.push(job_json_data);
        });
    
        if (jobs && jobs.length) {
            responseClient(res, 200, 0, 'Success', data_job_list);
        } else {
            responseClient(res, 404, 1, 'No jobs found');
        }
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

export { add_job, update_job, delete_job, get_job, get_job_list };