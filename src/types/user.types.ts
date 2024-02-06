import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type UserAttributes = {
    firstName: string,
    lastName: string,
    email: string
};


export type UserModel = Model<UserAttributes & DefaultTableFieldsT>;
