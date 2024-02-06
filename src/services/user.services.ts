import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import { CustomExpressRequest } from '../types/common.types';
import bcrypt from 'bcrypt';
import User from '../model/user.model';

export const createUserService = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { firstName, lastName, email } = req.body;
    const newData = await User.build({ firstName, lastName, email })
    await newData.save()
    if (newData) {
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Success, 201, undefined, { newData });
    }
});

