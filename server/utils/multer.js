import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, './upload');
    cb(null, 'static/uploads/');
  },

  filename(req, file, cb) {
    console.log(file);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
    // cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  }

});

const memoryStorage = multer.memoryStorage();

function checkFileType(file, cb) {
  const filetypes = /pdf|doc|docx|jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // const mimetype = filetypes.test(file.mimetype);    // mimetype / filetypes  -  application/msword / doc

  // if (extname && mimetype) {
  if (extname) {
    return cb(null, true);
  } else {
    cb(new Error('check File Type error'));
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

const uploadMail = multer({
  storage: memoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

export { upload, uploadMail };