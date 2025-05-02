// src/upload/multer.config.ts
import multer from 'multer';
import { join } from 'path';

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, join(__dirname, '../../public/temp')); // store temp files
  },
  filename: function (_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });
