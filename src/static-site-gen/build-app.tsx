import React from 'react';
import { renderToString } from 'react-dom/server';

import fs from 'fs';
import path from 'path';

import {
  APP_MARKER,
  getPages,
  JS_BUNDLE_MARKER,
  PAGE_DESCRIPTION,
  STYLE_MARKER,
  TITLE_MARKER,
  DYNAMIC_PROP_MARKER
} from '@/config/server';

import { attempt, logger } from '@/utils';

void (function () {
  const htmlFile = attemptLoadTemplateHtmlIndexFile();
  for (const page of getPages()) {
    const { component: Component, props, htmlFileName, bundle, title, styles, description } = page;
    const pageAsReactString = renderToString(<Component {...(props ?? {})} />);
    const fileContents = replaceAll(htmlFile.slice(), {
      app: pageAsReactString,
      jsBundle: bundle,
      title,
      cssSheets: styles,
      description,
      props
    });
    attemptWriteFile(htmlFileName, fileContents);
  }
})();

interface PageMetadata {
  app: string;
  jsBundle: string;
  title: string;
  cssSheets: string[];
  description: string;
  props?: any;
}

function replaceAll(file: string, metadata: PageMetadata): string {
  /**
   * It is possible for a gieven file to require numerous css files
   */
  let css = '';
  for (const sheet of metadata.cssSheets) {
    css = css + `<link rel="stylesheet" href="${sheet}.css">\n`;
  }

  /**
   * If a page requires props,
   * convert pre-existing props to a JSON script tag
   * Otherwise we can sanitize our injection tag by replacing
   * it with an empty string;
   */
  let propsTag = '';
  if (metadata.props) {
    propsTag = `<script id="couch-gag-dy-props" type="application/json">${JSON.stringify(
      metadata.props
    )}</script>`;
  }

  return file
    .replace(APP_MARKER, metadata.app)
    .replace(JS_BUNDLE_MARKER, metadata.jsBundle)
    .replace(DYNAMIC_PROP_MARKER, propsTag)
    .replace(TITLE_MARKER, metadata.title)
    .replace(STYLE_MARKER, css)
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
  const { ok, error } = attempt(() => fs.writeFileSync(outFilePath, fileContents));
  if (!ok || error) {
    logger.error(error || new Error('UnknownWriteFileError'));
    process.exit(2);
  }
}
