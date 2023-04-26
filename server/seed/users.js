import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
const users = [{
  email: 'admin@admin.com',
  password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
  firstName: 'David',
  lastName: 'Ruize',
  isAdmin: true
}];

export default users;