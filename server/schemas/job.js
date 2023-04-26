/**
 * jobs
 **/

import mongoose from 'mongoose'

module.exports = new mongoose.Schema({
    title: String,
    type: String,
    location: String,
    field: String
});