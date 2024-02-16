import { DataTypes } from 'sequelize';
import { UserDetailsModel } from '../types/userDetails.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import { MODEL_VALIDATION_MESSAGE } from '../utils/messages.enum';
import UserModel from './user.model';
import DepartmentModel from './department.model';
import DesignationModel from './designation.model';

const UserDetail = sequelize.define<UserDetailsModel>(
  MODEL_NAMES.UserDetail,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isEmail: { msg: MODEL_VALIDATION_MESSAGE.Email } },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bod: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    departmentId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: DepartmentModel,
        key: 'id',
      },
    },
    designationId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: DesignationModel,
        key: 'id',
      },
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

export const UserDetailsSchema = z.object({
  userId: z.number(),
  designationId: z.number(),
  departmentId: z.number(),
  bod: z.string(),
  gender: z.string(),
  email: z.string().email(),
});

export default UserDetail;
