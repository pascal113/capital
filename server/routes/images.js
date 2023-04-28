import Express from 'express'
import { add_image, update_image, delete_image, get_image, get_image_list } from '../controllers/images.js';

const router = Express.Router();

// import Images from '../models/image.js'
// import {responseClient} from '../utils/util.js'
// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log('destination');
//     cb(null, 'static/uploads/');
//   },
//   filename: function (req, file, cb) {
//     console.log('filename');
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + Date.now() + ext);
//   }
// });

// const upload = multer({ storage: storage });

// router.post('/add', upload.single('image'), (req, res)  => {
    
//     console.log('post addImage');
//     console.log(req.file);

//     const {
//         type,
//         description
//     } = req.body;
//     let path =  req.file.filename;

//     let tempImages = new Images({
//         path,
//         type,
//         description
//     });

//     tempImages.save().then(data=>{
//         responseClient(res,200,0,'Save success',data)
//     }).cancel(err=>{
//         console.log(err);
//         responseClient(res);
//     });
// });

router.route('/add').post(add_image);
router.route('/list').get(get_image_list);
router.route('/:id').get(get_image).post(update_image).delete(delete_image);

export default router;