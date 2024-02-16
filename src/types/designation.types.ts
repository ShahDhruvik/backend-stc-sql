import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type DesignationAttributes = {
  name: string;
  code: string;
};

export type DesignationModel = Model<DesignationAttributes & DefaultTableFieldsT>;
