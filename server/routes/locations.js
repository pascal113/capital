import Express from 'express'
import { get_location_list } from '../controllers/locations.js';

const router = Express.Router();

router.route('/list').get(get_location_list);

export default router;