// import { isValidObjectId } from 'mongoose';
import responseWrapper from './responseWrapper';
import { COMMON_MESSAGE, STATUS_CODES } from '../utils/messages.enum';
import { Response } from 'express';
import { CustomExpressRequest } from '../types/common.types';

/**
 *
 * @param id Array of string to check for ObjectId
 * @returns Validation response or null if valid ids passed
 */
// export default function isObjectId(id: string[], req?: CustomExpressRequest, res?: Response) {
//   if (!id || id.length <= 0) {
//     res && res.status(STATUS_CODES.SC400);
//     return responseWrapper(false, COMMON_MESSAGE.Mongoose_id_validation, STATUS_CODES.SC400);
//   }
//   const c = id?.every(x => isValidObjectId(x));
//   if (!c) {
//     res && res.status(400);
//     return responseWrapper(false, COMMON_MESSAGE.Mongoose_id_validation, STATUS_CODES.SC400);
//   } else return null;
// }
