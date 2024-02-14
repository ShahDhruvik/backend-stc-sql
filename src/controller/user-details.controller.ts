import {
    createUserDetailsSv,
    editUserDetailsSv,
    inActiveUserDetailsSv,
    deleteUserDetailsSv,
    getOneUserDetailsSv,
    getAllUserDetailsSv
} from '../services/user-details.services';

export const createUserDetailsCt = async (req, res, next) => {
    const result = await createUserDetailsSv(req, res, next);
    return res.json(result);
};
export const editUserDetailsCt = async (req, res, next) => {
    const result = await editUserDetailsSv(req, res, next);
    return res.json(result);
};
export const inActiveUserDetailsCt = async (req, res, next) => {
    const result = await inActiveUserDetailsSv(req, res, next);
    return res.json(result);
};
export const deleteUserDetailsCt = async (req, res, next) => {
    const result = await deleteUserDetailsSv(req, res, next);
    return res.json(result);
};
export const getOneUserDetailsCt = async (req, res, next) => {
    const result = await getOneUserDetailsSv(req, res, next);
    return res.json(result);
};
export const getAllUserDetailsCt = async (req, res, next) => {
    const result = await getAllUserDetailsSv(req, res, next);
    return res.json(result);
};

