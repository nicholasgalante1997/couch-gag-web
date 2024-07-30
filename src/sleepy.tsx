import { styleText } from 'node:util';
import { toStatic } from 'react-sleepy';
import getSleepyConfig from './utils/getSleepyConf';

toStatic(getSleepyConfig() as any)
  .then(() => console.log(styleText('green', 'Built static assets in dist.')))
  .catch((e) => console.error(e));
