import path from 'node:path';
import { toStatic } from 'react-sleepy';
import { LandingPage } from '@/pages';

toStatic([
  {
    Component: LandingPage,
    name: 'landing',
    outpath: 'dist/index.html',
    hydration: {
      scripts: [
        {
          src: path.resolve(process.cwd(), 'src', 'mounts', 'landing.tsx')
        }
      ]
    }
  }
])
  .then((result) => {
    if (result && result.length) {
      const stats = result.filter(i => typeof i !== "undefined");
      let failed = false;
      for (const stat of stats) {
        if (stat && stat.toJson) {
          const info = stat.toJson();
          if (info.hasErrors()) {
            console.warn(`Compiled with errors. See below`);
            console.error(info.errors);
            failed = true;
          }

          if (info.hasWarnings()) {
            console.warn(info.warnings);
          }
        }
      }

      if (failed) {
        console.error(`Sleepy ssg failed`);
      }
    }
  })
  .catch((e) => console.error(e));
