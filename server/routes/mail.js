import Express from 'express'
import { send_contact, send_job } from '../controllers/mail.js';

const router = Express.Router();

router.route('/contact').post(send_contact);
router.route('/job').post(send_job);

export default router;