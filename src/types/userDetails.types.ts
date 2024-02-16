import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type UserDetailsAttributes = {
  userId: number;
  email: string;
  gender: string;
  bod: Date;
  departmentId: number;
  designationId: number;
};

export type UserDetailsModel = Model<UserDetailsAttributes & DefaultTableFieldsT>;
