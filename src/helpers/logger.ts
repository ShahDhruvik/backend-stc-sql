import { createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { json } = format;

const serviceName = 'common';

const getCwd = (x?: string) => {
  let cwd = process.cwd();
  if (cwd.includes(serviceName)) {
    process.chdir('../');
    cwd = process.cwd();
  }
  return { cwd };
};

const { cwd } = getCwd('');

const dailyRotate: DailyRotateFile = new DailyRotateFile({
  filename: 'error-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  dirname: cwd + `/${serviceName}/` + '/logs/',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = createLogger({
  format: json(),
  transports: [dailyRotate],
});

export default logger;
