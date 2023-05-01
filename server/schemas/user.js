/**
 * user table
 */
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_AUTH } from '../config/constant.js';

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
    },
    lastSeen: {
        type: Date
    }
}, {
    timestamps: true    
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
      _id: this._id,
      email: this.email,
      type: TOKEN_AUTH
    }, process.env.JWT_SECRET, !this.isAdmin && {
      expiresIn: "30m"
    });
    return token;
};

export default userSchema;