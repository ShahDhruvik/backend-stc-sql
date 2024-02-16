import {
  createUserSv,
  editUserSv,
  inActiveUserSv,
  deleteUserSv,
  getOneUserSv,
  getAllUserSv,
} from '../services/user.services';
import { createUserDetailsSv, getAllUserDetailsSv } from '../services/userDetails.services';

export const createUserDetailsCt = async (req, res, next) => {
  const result = await createUserDetailsSv(req, res, next);
  return res.json(result);
};
export const editUserCt = async (req, res, next) => {
  const result = await editUserSv(req, res, next);
  return res.json(result);
};
export const inActiveUserCt = async (req, res, next) => {
  const result = await inActiveUserSv(req, res, next);
  return res.json(result);
};
export const deleteUserCt = async (req, res, next) => {
  const result = await deleteUserSv(req, res, next);
  return res.json(result);
};
export const getOneUserCt = async (req, res, next) => {
  const result = await getOneUserSv(req, res, next);
  return res.json(result);
};
export const getAllUserDetailsCt = async (req, res, next) => {
  const result = await getAllUserDetailsSv(req, res, next);
  return res.json(result);
};
