import { NextFunction, Request, Response } from 'express';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE, RESPONSE_MESSAGE_CODES, STATUS_CODES } from '../utils/messages.enum';
import logger from '../helpers/logger';
import { CustomExpressRequest } from '../types/common.types';

/**
 *
 * @param handler Express request handler.
 * @returns handler
 * @description Wrap async functions from services into this and it'll handle trycatch for them easily at global level.
 */
export default function asyncHandler(
  handler: (req: CustomExpressRequest, res: Response, next: NextFunction, [string]?: any) => any,
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await handler(req, res, next);
    } catch (error) {
      console.log(error)
      const errMsg = error?.message || RESPONSE_MESSAGE_CODES.UnknownError;
      // const event = (<CustomExpressRequest>req)?.event;
      // if (event) {
      //   await createEventLogService(req, res, next, {
      //     ...event,
      //     isError: true,
      //     description: errMsg,
      //   });
      // }
      console.log(RESPONSE_MESSAGE_CODES.AsyncMiddlewareError, error.message);
      res.status(STATUS_CODES.SC500);
      const data = { method: req.method, api: req.url, body: req.body };
      logger.error(errMsg, { data });
      const re = responseWrapper(false, COMMON_MESSAGE.Server_Error, STATUS_CODES.SC500, null, error.message);
      return re;
    }
  };
}
