import pino from 'pino';

function logLevel() {
  if (process.env.NODE_ENV === 'production') {
    return 'silent';
  }
  return 'info';
}

export const logger = pino({
  name: 'evergreen-terrace',
  browser: {
    asObject: true,
  },
});
