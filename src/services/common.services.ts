import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import { removeOldFile } from '../middleware/multer.middleware';
import { COMMON_MESSAGE } from '../utils/messages.enum';

export const fileUploadService = asyncHandler(async (req, res, next) => {
  const originalName = req.file?.originalname;
  if (!req.file?.filename) {
    res.status(400);
    return responseWrapper(false, COMMON_MESSAGE.fileUploadFailed, 400);
  }
  const file = 'uploads/' + req?.file?.filename || '';
  if (req.body?.oldFile && req.body?.oldFile !== '') {
    removeOldFile(req.body.oldFile, req, res);
  }
  return responseWrapper(true, COMMON_MESSAGE.Success, 200, { file, originalName });
});

