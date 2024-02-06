import {
    createUserService,
} from '../services/user.services';

export const createUserCt = async (req, res, next) => {
    const result = await createUserService(req, res, next);
    return res.json(result);
};

