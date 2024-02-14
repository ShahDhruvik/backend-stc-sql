import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';
export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export type UserDetailsAttributes = {
    userId: number,
    email: string
    gender: Gender
    dob: any
    departmentId: number
    designationId: number
};


export type UserDetailsModel = Model<UserDetailsAttributes & DefaultTableFieldsT>;
