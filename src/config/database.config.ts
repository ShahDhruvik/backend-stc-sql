import Seq, { Sequelize, Dialect, Options } from 'sequelize';
import getEnv from './env.config';
import { queryLogger } from '../helpers/logger';


const sequelizeOpts: Options = {
  host: getEnv('SQL_HOST'),
  dialect: getEnv('SQL_DIALECT') as Dialect,
  logging: q => queryLogger.info(q),
  retry: {
    match: [/Deadlock/i, Seq.ConnectionError], // Retry on connection errors
    max: 3, // Maximum retry 3 times
    backoffBase: 3000, // Initial backoff duration in ms. Default: 100,
    backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
}


const connectDb = async () => {
  try {
    const sequelize = new Sequelize(getEnv('SQL_DATABASE'), getEnv('SQL_USERNAME'), getEnv('SQL_PASSWORD'), sequelizeOpts)
    await sequelize.authenticate()
    console.log('Database connected!');
  } catch (error) {
    console.log(error)
    console.log(error.message);
  }
};

export default connectDb;
