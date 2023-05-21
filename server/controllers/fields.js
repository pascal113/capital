import Field from '../models/field.js'
import asyncHandler from 'express-async-handler';
import { responseClient } from '../utils/libs.js'
  
// Get a list of fields
const get_field_list = asyncHandler(async (req, res) => {    
    
    try {
        console.log('get_field_list');

        const fields = await Field.find();       
    
        if (fields && fields.length) {
            responseClient(res, 200, 0, 'Success', fields);
        } else {
            responseClient(res, 200, 1, 'No jobs found', []);
        }
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

export { get_field_list };