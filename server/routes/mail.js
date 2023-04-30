import Express from 'express'
import { send_contact, send_job } from '../controllers/mail.js';
import { uploadMail } from '../utils/multer.js';

const router = Express.Router();

router.route('/contact').post(send_contact);
// router.route('/job').post(upload.single('resume'), upload.single('certificate'), upload.single('document'), send_job);
// router.route('/job').post(upload.single('resume', 'certificate', 'document'), send_job);
router.route('/job').post(uploadMail.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'document', maxCount: 1 },
    { name: 'certificate', maxCount: 1 }
  ]), send_job);

export default router;