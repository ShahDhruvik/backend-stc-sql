import multer from 'multer';
import path from 'path';
import { sanitizedFileName } from '../utils/constants';
import fs from 'fs';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import logger from '../helpers/logger';
import { CustomExpressRequest } from '../types/common.types';
import { Response } from 'express';

const uploadPath = path.join(__dirname, '../..', 'uploads');

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const sanitized = sanitizedFileName(file.originalname);
    const fileName = `${Date.now()}-${sanitized}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;

export function handleMulterError(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    const re = responseWrapper(false, COMMON_MESSAGE.fileUploadFailed, 400);

    return res.status(400).json(re);
  } else {
    next(err);
  }
}

export function removeOldFile(file: string, req: CustomExpressRequest, res: Response) {
  try {
    const filePath = path.join(__dirname, '../..', file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    logger.error(`Error while removing a file ${file}`, { error: error?.message || '' });
  }
}
