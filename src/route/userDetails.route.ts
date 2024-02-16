import express from 'express';
import {
  createUserCt,
  editUserCt,
  inActiveUserCt,
  deleteUserCt,
  getOneUserCt,
  getAllUserCt,
} from '../controller/user.controller';
import { createUserDetailsCt, getAllUserDetailsCt } from '../controller/userDetails.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { UserDetailsSchema } from '../model/userDetails.model';
import { USER_DETAILS_RT } from '../utils/route.enums';
const userDetailsRt = express.Router();

userDetailsRt.post(USER_DETAILS_RT.create, schemaValidator(UserDetailsSchema), createUserDetailsCt);
userDetailsRt.put(USER_DETAILS_RT.edit, editUserCt);
userDetailsRt.put(USER_DETAILS_RT.inActive, inActiveUserCt);
userDetailsRt.put(USER_DETAILS_RT.delete, deleteUserCt);
userDetailsRt.put(USER_DETAILS_RT.delete, deleteUserCt);
userDetailsRt.get(USER_DETAILS_RT.getOne, getOneUserCt);
userDetailsRt.get(USER_DETAILS_RT.listAll, getAllUserDetailsCt);

export default userDetailsRt;
