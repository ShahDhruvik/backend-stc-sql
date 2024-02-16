import express from 'express';
import {
  createDepartmentCt,
  editDepartmentCt,
  inActiveDepartmentCt,
  deleteDepartmentCt,
  getOneDepartmentCt,
  getAllDepartmentCt,
} from '../controller/department.controller';
import {
  createDesignationCt,
  editDesignationCt,
  inActiveDesignationCt,
  deleteDesignationCt,
} from '../controller/designation.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { DesignationSchema } from '../model/designation.model';
import { DESIGNATION_RT } from '../utils/route.enums';
const designationRt = express.Router();

designationRt.post(DESIGNATION_RT.create, schemaValidator(DesignationSchema), createDesignationCt);
designationRt.put(DESIGNATION_RT.edit, editDesignationCt);
designationRt.put(DESIGNATION_RT.inActive, inActiveDesignationCt);
designationRt.put(DESIGNATION_RT.delete, deleteDesignationCt);
designationRt.get(DESIGNATION_RT.getOne, getOneDepartmentCt);
designationRt.get(DESIGNATION_RT.listAll, getAllDepartmentCt);

export default designationRt;
