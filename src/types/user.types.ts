import { Model } from 'mongoose';
import { DefaultTableFieldsT } from './common.types';
import { USER_TYPES } from '../utils/constants';

export type UserAttributes = {
    firstName: string;
    lastName: string;
    email: number;
    password: string;
    type: keyof typeof USER_TYPES
};

export type UserModel = Model<UserAttributes & DefaultTableFieldsT>;
