import { DataTypes } from 'sequelize';
import { DesignationModel } from '../types/designation.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import { optionalTextInput } from '../helpers/common.helper';
import UserDetails from './user-details.model';

const Designation = sequelize.define<DesignationModel>(
  MODEL_NAMES.Designation,
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
Designation.hasOne(UserDetails, { foreignKey: 'designationId' })
export const DesignationSchema = z.object({
  name: z.string(),
  code: optionalTextInput(z.string()),
});

export default Designation;
