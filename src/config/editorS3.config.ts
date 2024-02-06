import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { sanitizedFileName } from '../utils/constants';
import getEnv from './env.config';
import logger from '../helpers/logger';

const s3 = new S3Client({
  credentials: {
    accessKeyId: getEnv('EDITOR_AWS_ACCESS_KEY_ID'),
    secretAccessKey: getEnv('EDITOR_AWS_SECRET_ACCESS_KEY'),
  },
  region: getEnv('EDITOR_AWS_REGION'),
});

const s3Storage = multerS3({
  s3,
  bucket: getEnv('EDITOR_AWS_BUCKET_NAME'),
  key: (req, file, cb) => {
    const sanitized = sanitizedFileName(file.originalname);
    const modifiedName = `${Date.now()}-${sanitized}`;
    return cb(null, modifiedName);
  },
});

const upload = multer({
  storage: s3Storage,
});

const editorS3Upload = (req, res, next) => {
  try {
    upload.single('file')(req, res, next);
  } catch (error) {
    logger.error('Error while editor file upload : ' + error?.message);
    console.log(error?.message);
  }
};

export default editorS3Upload;

export const removeFromEditorS3 = async (key: string) => {
  const bucketParams = { Bucket: getEnv('EDITOR_AWS_BUCKET_NAME'), Key: key };
  try {
    const data = await s3.send(new DeleteObjectCommand(bucketParams));
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};
