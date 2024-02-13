
import express from 'express';
import userRt from './user.route';

const routes = [
    { route: userRt }
];

const appRoute = express.Router();

for (const r of routes) {
    appRoute.use(r.route);
}

export default appRoute;
