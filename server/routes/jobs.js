import Express from 'express'
import { add_job, update_job, delete_job, get_job, get_job_list } from '../controllers/jobs.js';

const router = Express.Router();

router.route('/add').post(add_job);
router.route('/list').get(get_job_list);
router.route('/:id').get(get_job).post(update_job).delete(delete_job);

export default router;