import { Sequelize, Dialect } from 'sequelize';
import getEnv from './env.config';
const database = getEnv('SQL_DATABASE')
const username = getEnv('SQL_USERNAME')
const password = getEnv('SQL_PASSWORD')
const dialect = getEnv('SQL_DIALECT')
const host = getEnv('SQL_HOST')
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect as Dialect
})
const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connected!');
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
