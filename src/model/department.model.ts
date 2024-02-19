import { DataTypes } from 'sequelize';
import { DepartmentModel } from '../types/department.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import { optionalTextInput } from '../helpers/common.helper';
import UserDetails from './user-details.model';

const Department = sequelize.define<DepartmentModel>(
  MODEL_NAMES.Department,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { timestamps: true },
);
Department.hasOne(UserDetails, { foreignKey: 'departmentId' })
export const DepartmentSchema = z.object({
  name: z.string(),
  code: optionalTextInput(z.string()),
});

export default Department;
