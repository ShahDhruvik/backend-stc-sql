import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { USER_TYPES } from '../utils/constants';

export type DefaultTableFieldsT = {
  id: any;
  deletedAt: any;
  createdBy: any;
  updatedBy: any;
  deletedBy: any;
  isDeleted: boolean;
  isActive: boolean;
  isNewRecord?: boolean;
};

export type CustomJwtPayload = {
  user?: {
    name: string;
    contactNo: string;
    organizationId?: number;
    id: number;
    country: string;
    createdAt: Date;
    ip?: string;
    from?: string;
    practiceId?: number;
    type: USER_TYPES;
  };
} & JwtPayload;

export type CustomExpressRequest = {
  token?: CustomJwtPayload;
  // event?: EventLogAttributes & { createdBy?: string; updatedBy?: string };
} & Request;

export type FilterArguments = {
  search: string | undefined;
  sortOrder: 'asc' | 'desc';
  sortParam: string;
  limitPerPage: number;
  currentPage: number;
};

