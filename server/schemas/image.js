/**
 * images tables
 **/

import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({    
    path: String,
    type: String,  // 'banner', 'hamburger'
    index: Number,
    subIndex: Number,
    title: String,
    url: String,
    description: String   
}, {
    timestamps: true
});

export default imageSchema;