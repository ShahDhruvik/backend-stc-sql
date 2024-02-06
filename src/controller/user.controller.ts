import {
    registerUserService,
    deleteUserService,
    editUserService,
    getAllUserService,
    inActiveUserService,
    getAllActiveUserService,
} from '../services/user.services';

export const registerUserCt = async (req, res, next) => {
    const result = await registerUserService(req, res, next);
    return res.json(result);
};
export const editUserCt = async (req, res, next) => {
    const result = await editUserService(req, res, next);
    return res.json(result);
};
export const deleteUserCt = async (req, res, next) => {
    const result = await deleteUserService(req, res, next);
    return res.json(result);
};
export const inActiveUserCt = async (req, res, next) => {
    const result = await inActiveUserService(req, res, next);
    return res.json(result);
};
export const getAllUserCt = async (req, res, next) => {
    const result = await getAllUserService(req, res, next);
    return res.json(result);
};
export const getAllActiveUserCt = async (req, res, next) => {
    const result = await getAllActiveUserService(req, res, next);
    return res.json(result);
};
