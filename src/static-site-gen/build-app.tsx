import React from 'react';
import { renderToString } from 'react-dom/server';

import fs from 'fs';
import path from 'path';

import {
  APP_MARKER,
  JS_BUNDLE_MARKER,
  PAGE_DESCRIPTION,
  STYLE_MARKER,
  TITLE_MARKER,
  getPages
} from '@/config/server';

import { attempt, logger } from '@/utils';

void (function () {
  const htmlFile = attemptLoadTemplateHtmlIndexFile();
  for (const page of getPages()) {
    const { component: Component, props, htmlFileName, bundle, title, styles, description } = page;
    const pageAsReactString = renderToString(<Component {...(props ?? {})} />);
    const fileContents = replaceAll(
      htmlFile.slice(), {
      app: pageAsReactString,
      jsBundle: bundle,
      title,
      cssSheets: styles,
      description
    });
    attemptWriteFile(htmlFileName, fileContents);
  }
})();

function replaceAll(
  file: string,
  metadata: { app: string; jsBundle: string; title: string; cssSheets: string[]; description: string }
): string {
  let rels = '';
  for (const sheet of metadata.cssSheets) {
    rels = rels + `<link rel="stylesheet" href="${sheet}.css">\n`;
  }
  return file
    .replace(APP_MARKER, metadata.app)
    .replace(JS_BUNDLE_MARKER, metadata.jsBundle)
    .replace(TITLE_MARKER, metadata.title)
    .replace(STYLE_MARKER, rels)
    .replace(PAGE_DESCRIPTION, metadata.description);
}

function loadTemplateHtmlIndexFile() {
  const htmlFilePath = path.resolve(process.cwd(), 'html', 'index.html');
  const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf-8' });
  return htmlFile;
}

function attemptLoadTemplateHtmlIndexFile() {
  const { data, ok, error } = attempt(loadTemplateHtmlIndexFile);
  if (data && ok) return data;
  else {
    logger.error(error);
    process.exit(2);
  }
}

function attemptWriteFile(htmlFileName: string, fileContents: string) {
  const outDirPath = path.resolve(process.cwd(), 'build');
  const outFilePath = path.resolve(outDirPath, `${htmlFileName}.html`);
  const { ok, error } = attempt(
    () => fs.writeFileSync(outFilePath, fileContents)
  );
  if (!ok || error) {
    logger.error(error || new Error('UnknownWriteFileError'));
    process.exit(2);
  }
}
