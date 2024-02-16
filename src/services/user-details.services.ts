import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import { CustomExpressRequest } from '../types/common.types';
import UserDetailsModel from '../model/user-details.model'
import { QueryTypes, where } from 'sequelize';
import { sequelize } from '../config/database.config';

export const createUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { email, dob, gender, userId, departmentId, designationId } = req.body;
    const newData = await UserDetailsModel.create({ email, dob, gender, userId, departmentId, designationId })
    if (newData) {
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Created, 201, newData, undefined);
    }
});
export const editUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { id } = req.params
    const updateParams = req.body;
    const updatedData = await UserDetailsModel.update(updateParams, { where: { id: Number(id) }, returning: true })
    if (updatedData[0] === 1) {
        const updatedDataObject = updatedData[1][0];
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
    } else {
        res.status(201);
        return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
    }
});
export const inActiveUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { id } = req.params
    const { isActive } = req.body;
    const updatedData = await UserDetailsModel.update({ isActive: !isActive }, { where: { id: Number(id) }, returning: true })
    if (updatedData[0] === 1) {
        const updatedDataObject = updatedData[1][0];
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
    } else {
        res.status(201);
        return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
    }
});
export const deleteUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { id } = req.params
    const { isDeleted } = req.body;
    const updatedData = await UserDetailsModel.update({ isDeleted: !isDeleted, isActive: false }, { where: { id: Number(id) }, returning: true })
    if (updatedData[0] === 1) {
        const updatedDataObject = updatedData[1][0];
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
    } else {
        res.status(201);
        return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
    }
});
export const getOneUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const { id } = req.params
    const query = 'SELECT get_one_UserDetails(:UserDetails_id)'
    const updatedData = await sequelize.query(query, {
        replacements: {
            UserDetails_id: id
        },
        type: QueryTypes.RAW
    })
    if ((updatedData[0][0] as any).get_one_UserDetails) {
        const updatedDataObject = (updatedData[0][0] as any).get_one_UserDetails;
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
    } else {
        res.status(201);
        return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
    }
});
export const getAllUserDetailsSv = asyncHandler(async (req: CustomExpressRequest, res) => {
    const query = 'SELECT get_all_UserDetails()'
    const updatedData = await sequelize.query(query, {
        type: QueryTypes.RAW
    })
    if ((updatedData[0][0] as any).get_all_UserDetails) {
        const updatedDataObject = (updatedData[0][0] as any).get_all_UserDetails;
        res.status(201);
        return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
    } else {
        res.status(201);
        return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
    }
});

