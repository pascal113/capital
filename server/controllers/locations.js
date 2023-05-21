import Location from '../models/location.js'
import asyncHandler from 'express-async-handler';
import { responseClient } from '../utils/libs.js'
  
// Get a list of location
const get_location_list = asyncHandler(async (req, res) => {    
    
    try {
        console.log('get_location_list');

        const locations = await Location.find();       
    
        if (locations && locations.length) {
            responseClient(res, 200, 0, 'Success', locations);
        } else {
            responseClient(res, 200, 1, 'No jobs found', []);
        }
    }
    catch (error) {
        console.log(error);
        responseClient(res);
    }
});

export { get_location_list };