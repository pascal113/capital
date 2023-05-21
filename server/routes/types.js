import Express from 'express'
import { get_type_list } from '../controllers/types.js';

const router = Express.Router();

router.route('/list').get(get_type_list);

export default router;