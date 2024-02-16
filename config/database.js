/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
require('dotenv').config();

const configOpts = {
  username: 'postgres',
  password: 'Netutsav@123',
  database: 'user',
  host: '127.0.0.1',
  dialect: 'postgres',
};

const config = {
  development: configOpts,
  test: configOpts,
  production: configOpts,
};

module.exports = config;
