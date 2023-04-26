/**
 * user table
 */
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    firstName: {
        type: String,
        required: true
      },
    lastName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true    
});

export default userSchema;