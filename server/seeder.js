import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'
import users from './seed/users.js';
import images from './seed/images.js';
import jobs from './seed/jobs.js';
import types from './seed/types.js';
import locations from './seed/locations.js';
import fields from './seed/fields.js';
import User from './models/user.js';
import Job from './models/job.js';
import Image from './models/image.js';
import Mail from './models/mail.js';
import Type from './models/type.js';
import Location from './models/location.js';
import Field from './models/field.js';
import {initAllImageFile} from './utils/libs.js'
dotenv.config();
await connectDB();

const createBaseData = async () => {
  try {
    await User.deleteMany();
    await Job.deleteMany();
    await Image.deleteMany();
    await Type.deleteMany();
    await Location.deleteMany();
    await Field.deleteMany();
    const createdUser = await User.insertMany(users);
    console.log(createdUser);
    await Type.insertMany(types);
    await Location.insertMany(locations);
    await Field.insertMany(fields);
    await Job.insertMany(jobs);
    await Image.insertMany(images);
    initAllImageFile();   
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyAllData = async () => {
  try {
    await User.deleteMany();
    await Job.deleteMany();
    await Image.deleteMany();
    await Mail.deleteMany();
    await Type.deleteMany();
    await Location.deleteMany();
    await Field.deleteMany();
    console.log('Data Destroy'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}.red`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyAllData();
} else {
  createBaseData();
}