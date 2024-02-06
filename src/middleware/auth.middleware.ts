import { NextFunction, Response } from 'express';
import { CustomExpressRequest, CustomJwtPayload } from '../types/common.types';
import responseWrapper from '../helpers/responseWrapper';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import logger from '../helpers/logger';

const authMw = async (req: CustomExpressRequest, res: Response, next: NextFunction) => {
  try {
    const response = responseWrapper(false, COMMON_MESSAGE.Unauthorized, 401);
    const strPayload = req.header('x-auth-payload');
    if (!strPayload) return res.status(401).json(response);
    const payload = JSON.parse(strPayload) as CustomJwtPayload;
    if (!payload) return res.status(401).json(response);
    req.token = payload;
    if (req.header('Newtoken')) {
      res.setHeader('Access-Control-Expose-Headers', 'Newtoken');
      res.setHeader('Newtoken', req.header('Newtoken'));
    }
    return next();
  } catch (error) {
    console.log(error);
    const data = { method: req.method, api: req.url, body: req.body };
    logger.error(error.message || 'Unknown error!', { data });
    const re = responseWrapper(false, COMMON_MESSAGE.Server_Error, 500, error.message, {
      name: error.name || ' ',
      stack: error,
    });
    return res.status(500).json(re);
  }
};

export default authMw;
