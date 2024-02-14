import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type UserAttributes = {
    name: string,
    mobile: string
};


export type UserModel = Model<UserAttributes & DefaultTableFieldsT>;
