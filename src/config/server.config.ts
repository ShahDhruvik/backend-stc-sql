import express, { Express } from 'express';
import cors from 'cors';
import appRoute from '../route';
import { COMMON_ROUTE } from '../utils/route.enums';
import { CorsOptions } from 'cors';
import path from 'path';

const corsOpts: CorsOptions = {
  origin: '*',
};

const app: Express = express();

app.use(cors(corsOpts));
app.use(express.json());

app.use(COMMON_ROUTE.api + '/uploads', express.static(path.join(__dirname, '../..', 'uploads')));
app.use(COMMON_ROUTE.api, appRoute);

export default app;
