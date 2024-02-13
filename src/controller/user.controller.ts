import {
    createUserSv,
    editUserSv,
    inActiveUserSv,
    deleteUserSv
} from '../services/user.services';

export const createUserCt = async (req, res, next) => {
    const result = await createUserSv(req, res, next);
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

