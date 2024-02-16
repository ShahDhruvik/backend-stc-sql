import {
  createDepartmentSv,
  editDepartmentSv,
  inActiveDepartmentSv,
  deleteDepartmentSv,
  getOneDepartmentSv,
  getAllDepartmentSv,
} from '../services/department.services';
import {
  createDesignationSv,
  editDesignationSv,
  inActiveDesignationSv,
  deleteDesignationSv,
} from '../services/designation.services';

export const createDesignationCt = async (req, res, next) => {
  const result = await createDesignationSv(req, res, next);
  return res.json(result);
};
export const editDesignationCt = async (req, res, next) => {
  const result = await editDesignationSv(req, res, next);
  return res.json(result);
};
export const inActiveDesignationCt = async (req, res, next) => {
  const result = await inActiveDesignationSv(req, res, next);
  return res.json(result);
};
export const deleteDesignationCt = async (req, res, next) => {
  const result = await deleteDesignationSv(req, res, next);
  return res.json(result);
};
export const getOneDepartmentCt = async (req, res, next) => {
  const result = await getOneDepartmentSv(req, res, next);
  return res.json(result);
};
export const getAllDepartmentCt = async (req, res, next) => {
  const result = await getAllDepartmentSv(req, res, next);
  return res.json(result);
};
