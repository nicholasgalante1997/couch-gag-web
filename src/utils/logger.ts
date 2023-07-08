import pino from 'pino';

function logLevel() {
  if (process.env.NODE_ENV === 'production') {
    return 'fatal';
  }
  return 'info';
}

export const logger = pino({
  name: 'evergreen-terrace',
  level: logLevel(),
  browser: {
    asObject: true,
  },
});
