import express from 'express';
import {
  createDepartmentCt,
  editDepartmentCt,
  inActiveDepartmentCt,
  deleteDepartmentCt,
  getOneDepartmentCt,
  getAllDepartmentCt,
} from '../controller/department.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { DepartmentSchema } from '../model/department.model';
import { DEPARTMENT_RT } from '../utils/route.enums';
const departmentRt = express.Router();

departmentRt.post(DEPARTMENT_RT.create, schemaValidator(DepartmentSchema), createDepartmentCt);
departmentRt.put(DEPARTMENT_RT.edit, editDepartmentCt);
departmentRt.put(DEPARTMENT_RT.inActive, inActiveDepartmentCt);
departmentRt.put(DEPARTMENT_RT.delete, deleteDepartmentCt);
departmentRt.get(DEPARTMENT_RT.getOne, getOneDepartmentCt);
departmentRt.get(DEPARTMENT_RT.listAll, getAllDepartmentCt);

export default departmentRt;
