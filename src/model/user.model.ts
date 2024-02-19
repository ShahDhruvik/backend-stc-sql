import { DataTypes } from 'sequelize';
import { UserModel, UserAttributes } from '../types/user.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import UserDetails from './user-details.model';

const User = sequelize.define<UserModel>(
  MODEL_NAMES.User,
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
    mobile: {
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
User.hasOne(UserDetails, { foreignKey: 'userId' });
export const UserSchema = z.object({
  name: z.string(),
  mobile: z.string().length(10).optional(),
});

export default User;
