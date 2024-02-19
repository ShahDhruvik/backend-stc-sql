import { DataTypes } from 'sequelize';
import { UserDetailsModel, Gender } from '../types/user-details.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';
import { COMMON_MESSAGE } from '../utils/messages.enum';
import Department from './department.model';

const UserDetails = sequelize.define<UserDetailsModel>(
    MODEL_NAMES.UserDetails,
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: { msg: COMMON_MESSAGE.ValidEmail } }
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        designationId: {
            type: DataTypes.INTEGER,
            allowNull: false,

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
    departmentId: z.number(),
    designationId: z.number(),
    email: z.string().email({ message: COMMON_MESSAGE.ValidEmail }),
    dob: z.string(),
    gender: z.enum([Gender.Male, Gender.Male, Gender.Other])
});

export default UserDetails;