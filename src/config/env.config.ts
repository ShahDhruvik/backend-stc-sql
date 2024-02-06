import dotenv from 'dotenv';
dotenv.config();
interface ICustomProcessEnv {
  SERVICE_NAME: string;
  MONGODB_URL: string;
  NODE_ENV: 'development' | 'production';
  PORT?: string;
  SMTP_EMAIL_HOST: string;
  SMTP_EMAIL_PORT: string;
  SMTP_EMAIL_ADDRESS: string;
  SMTP_EMAIL_PASSWORD: string;
  AUTH_URL: string;
  MAIN_URL: string;
  COMMON_URL: string;
  MESSAGE_URL: string;
  API_GATEWAY_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRE: string;
  EDITOR_AWS_ACCESS_KEY_ID: string;
  EDITOR_AWS_BUCKET_NAME: string;
  EDITOR_AWS_REGION: string;
  EDITOR_AWS_SECRET_ACCESS_KEY: string;
  SQL_DATABASE: string
  SQL_USERNAME: string
  SQL_PASSWORD: string
  SQL_DIALECT: string
  SQL_HOST: string
}

/**
 *
 * @param key
 * @returns Environment variable
 */
export default function getEnv(key: keyof ICustomProcessEnv) {
  return process.env[key];
}
