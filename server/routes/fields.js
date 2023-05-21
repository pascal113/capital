import Express from 'express'
import { get_field_list } from '../controllers/fields.js';

const router = Express.Router();

router.route('/list').get(get_field_list);

export default router;