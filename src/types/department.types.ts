import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type DepartmentAttributes = {
  name: string;
  code: string;
};

export type DepartmentModel = Model<DepartmentAttributes & DefaultTableFieldsT>;
