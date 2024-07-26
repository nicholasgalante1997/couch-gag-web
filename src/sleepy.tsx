import path from 'node:path';
import fs from 'node:fs';
import { styleText } from 'node:util';
import { toStatic } from 'react-sleepy';

import { PageRegistry } from '@/pages';

import SleepyConfig from '../sleepy.json';

const conf = SleepyConfig.service_data.pages
  .filter(({ type, html }) => html && type === 'static')
  .map((page) => {
    return {
      name: page.bundle,
      Component: PageRegistry.get(page.component as any),
      outpath: path.resolve(process.cwd(), 'build', `${page.html}.html`),
      hydration: {
        scripts: [{ src: getStaticBundle(page.bundle, 'build') }]
      }
    };
  });

toStatic(conf as any)
  .then(() => console.log(styleText('green', 'Built static assets in dist.')))
  .catch((e) => console.error(e));

function getStaticBundle(base: string, out: string, publicPath: string = '') {
  out = path.resolve(process.cwd(), out);
  const dirEnts = fs.readdirSync(out, {
    encoding: 'utf8',
    withFileTypes: true
  });
  const dirEnt = dirEnts.find((d) => d.isFile() && d.name.startsWith(`${base}.`));
  if (dirEnt) {
    return `${publicPath}/${dirEnt.name}`;
  }
  throw new Error('[reactsleepy/static]:::Asset does not exist.');
}
