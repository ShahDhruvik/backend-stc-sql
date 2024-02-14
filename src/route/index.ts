
import express from 'express';
import userRt from './user.route';
import userDetailsRt from './user-details.route';

const routes = [
    { route: userRt },
    { route: userDetailsRt },
];

const appRoute = express.Router();

for (const r of routes) {
    appRoute.use(r.route);
}

export default appRoute;
