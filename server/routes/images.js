import Express from 'express'
import { authConfirm } from '../middlewares/auth.js';
import { add_image, update_image, delete_image, get_image, get_image_list } from '../controllers/images.js';
import { upload } from '../utils/multer.js';

const router = Express.Router();

router.route('/add').post(authConfirm, upload.single('image'), add_image);
router.route('/list').get(get_image_list);
router.route('/:id').get(get_image).post(authConfirm, upload.single('image'), update_image).delete(authConfirm, delete_image);

export default router;