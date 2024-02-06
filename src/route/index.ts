/**
 * @description Gather all routes (including common and all modules) in this router.
 */

import express from 'express';
import commonRoute from './common.route';

const routes = [
    { route: commonRoute },
];

const appRoute = express.Router();

for (const r of routes) {
    appRoute.use(r.route);
}

export default appRoute;
