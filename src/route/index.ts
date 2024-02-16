import express from 'express';
import userRt from './user.route';
import departmentRt from './department.route';
import designationRt from './designation.route';
import userDetailsRt from './userDetails.route';

const routes = [{ route: userRt }, { route: departmentRt }, { route: designationRt }, { route: userDetailsRt }];

const appRoute = express.Router();

for (const r of routes) {
  appRoute.use(r.route);
}

export default appRoute;
