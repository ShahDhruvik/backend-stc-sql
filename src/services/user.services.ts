import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import { CustomExpressRequest } from '../types/common.types';
import UserModel from '../model/user.model';
import { QueryTypes, where } from 'sequelize';
import { sequelize } from '../config/database.config';

export const createUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { name, mobileNo } = req.body;
  const newData = await UserModel.create({ name, mobileNo });
  if (newData) {
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Created, 201, newData, undefined);
  }
});

export const editUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const updateParams = req.body;
  const updatedData = await UserModel.update(updateParams, { where: { id: Number(id) }, returning: true });
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
  } else {
    res.status(201);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
  }
});

export const inActiveUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  const updatedData = await UserModel.update({ isActive: !isActive }, { where: { id: Number(id) }, returning: true });
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
  } else {
    res.status(201);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
  }
});

export const deleteUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const { isDeleted } = req.body;
  const updatedData = await UserModel.update(
    { isDeleted: !isDeleted, isActive: false },
    { where: { id: Number(id) }, returning: true },
  );
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
  } else {
    res.status(201);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
  }
});

export const getOneUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const query = 'SELECT get_one_user(:user_id)';
  const updatedData = await sequelize.query(query, {
    replacements: {
      user_id: id,
    },
    type: QueryTypes.RAW,
  });
  if ((updatedData[0][0] as any).get_one_user) {
    const updatedDataObject = (updatedData[0][0] as any).get_one_user;
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
  } else {
    res.status(201);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
  }
});

export const getAllUserSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const query = 'SELECT get_all_users()';
  const updatedData = await sequelize.query(query, {
    type: QueryTypes.RAW,
  });
  if ((updatedData[0][0] as any).get_all_users) {
    const updatedDataObject = (updatedData[0][0] as any).get_all_users;
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 201, updatedDataObject, undefined);
  } else {
    res.status(201);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 201, undefined, undefined);
  }
});
