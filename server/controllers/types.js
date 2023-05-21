import Type from '../models/type.js'
import asyncHandler from 'express-async-handler';
import { responseClient } from '../utils/libs.js'
  
// Get a list of types
const get_type_list = asyncHandler(async (req, res) => {    
    
    try {
        console.log('get_type_list');

        const types = await Type.find();       
    
        if (types && types.length) {
            responseClient(res, 200, 0, 'Success', types);
        } else {
            responseClient(res, 200, 1, 'No jobs found', []);
        }
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

export { get_type_list };