import {
  createDepartmentSv,
  editDepartmentSv,
  inActiveDepartmentSv,
  deleteDepartmentSv,
  getOneDepartmentSv,
  getAllDepartmentSv,
} from '../services/department.services';

export const createDepartmentCt = async (req, res, next) => {
  const result = await createDepartmentSv(req, res, next);
  return res.json(result);
};
export const editDepartmentCt = async (req, res, next) => {
  const result = await editDepartmentSv(req, res, next);
  return res.json(result);
};
export const inActiveDepartmentCt = async (req, res, next) => {
  const result = await inActiveDepartmentSv(req, res, next);
  return res.json(result);
};
export const deleteDepartmentCt = async (req, res, next) => {
  const result = await deleteDepartmentSv(req, res, next);
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
