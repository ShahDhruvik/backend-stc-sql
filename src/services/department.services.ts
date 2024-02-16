import responseWrapper from '../helpers/responseWrapper';
import asyncHandler from '../middleware/asyncHandler.middleware';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import { CustomExpressRequest } from '../types/common.types';
import DepartmentModel from '../model/department.model';
import { QueryTypes, where } from 'sequelize';
import { sequelize } from '../config/database.config';

export const createDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { name, code } = req.body;
  const newData = await DepartmentModel.create({ name, code });
  if (newData) {
    res.status(201);
    return responseWrapper(true, COMMON_MESSAGE.Created, 201, newData, undefined);
  } else {
    res.status(422);
    return responseWrapper(true, COMMON_MESSAGE.Created, 422, newData, undefined);
  }
});

export const editDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const updateParams = req.body;
  const updatedData = await DepartmentModel.update(updateParams, { where: { id: Number(id) }, returning: true });
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(200);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 200, updatedDataObject, undefined);
  } else {
    res.status(404);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 404, undefined, undefined);
  }
});

export const inActiveDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  const updatedData = await DepartmentModel.update(
    { isActive: !isActive },
    { where: { id: Number(id) }, returning: true },
  );
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(200);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 200, updatedDataObject, undefined);
  } else {
    res.status(404);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 404, undefined, undefined);
  }
});

export const deleteDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const { isDeleted } = req.body;
  const updatedData = await DepartmentModel.update(
    { isDeleted: !isDeleted, isActive: false },
    { where: { id: Number(id) }, returning: true },
  );
  if (updatedData[0] === 1) {
    const updatedDataObject = updatedData[1][0];
    res.status(204);
    return responseWrapper(true, COMMON_MESSAGE.Updated, 204, updatedDataObject, undefined);
  } else {
    res.status(404);
    return responseWrapper(false, COMMON_MESSAGE.NotUpdated, 404, undefined, undefined);
  }
});

export const getOneDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const { id } = req.params;
  const query = 'SELECT get_one_department(:department_id)';
  const departmentData = await sequelize.query(query, {
    replacements: {
      department_id: id,
    },
    type: QueryTypes.RAW,
  });
  if ((departmentData[0][0] as any).get_one_department) {
    const DataObject = (departmentData[0][0] as any).get_one_department;
    res.status(200);
    return responseWrapper(true, COMMON_MESSAGE.Success, 200, DataObject, undefined);
  } else {
    res.status(404);
    return responseWrapper(false, COMMON_MESSAGE.Not_found, 404, undefined, undefined);
  }
});

export const getAllDepartmentSv = asyncHandler(async (req: CustomExpressRequest, res) => {
  const query = 'SELECT get_all_department()';
  const DepartmentData = await sequelize.query(query, {
    type: QueryTypes.RAW,
  });
  if ((DepartmentData[0][0] as any).get_all_department) {
    const DepartmentDataObject = (DepartmentData[0][0] as any).get_all_department;
    res.status(200);
    return responseWrapper(true, COMMON_MESSAGE.Success, 200, DepartmentDataObject, undefined);
  } else {
    res.status(404);
    return responseWrapper(false, COMMON_MESSAGE.Not_found, 404, undefined, undefined);
  }
});
