import { DataTypes } from 'sequelize';
import { UserModel, UserAttributes } from '../types/user.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import { optionalTextInput } from '../helpers/common.helper';
import { MODEL_VALIDATION_MESSAGE } from '../utils/messages.enum';

const User = sequelize.define<UserModel>(
    MODEL_NAMES.User,
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isEmail: { msg: MODEL_VALIDATION_MESSAGE.Email } }
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

export const UserSchema = z.object({
    firstName: z.string(),
    lastName: optionalTextInput(z.string()),
    email: z.string().email(),
});

export default User;