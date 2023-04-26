import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db';
import users from './seed/users';
import images from './seed/images';
import jobs from './seed/jobs';
import User from './models/user';
import Job from './models/job';
import Image from './models/image';
dotenv.config();
await connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Invoice.deleteMany();
    await Notification.deleteMany();
    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0];
    await Product.insertMany(products);
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Invoice.deleteMany();
    await Notification.deleteMany();
    console.log('Data Destroy'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}.red`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}