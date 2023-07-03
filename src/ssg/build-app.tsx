import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { pages, APP_MARKER, JS_BUNDLE_MARKER, TITLE_MARKER, STYLE_MARKER } from '@/config';
import { logger } from '@/utils';

function replaceAll(file: string, metadata: { app: string; jsBundle: string; title: string; cssSheets: string[] }) {
    let rels = ''
    for (const sheet of metadata.cssSheets) {
        rels = rels + `<link rel="stylesheet" href="${sheet}.css">\n`
    }
    return file
            .replace(APP_MARKER, metadata.app)
            .replace(JS_BUNDLE_MARKER, metadata.jsBundle)
            .replace(TITLE_MARKER, metadata.title)
            .replace(STYLE_MARKER, rels);
}

(async function () {
    for (const page of pages) {
        const { component: Component, props, htmlFileName, bundle, title, styles } = page;
        try {
            /** load html hbs file */
            const htmlFilePath = path.resolve(process.cwd(), 'html', 'index.html')
            const htmlFile = fs.readFileSync(htmlFilePath, { encoding: 'utf-8' });
            const pageAsReactString = renderToString(<Component {...(props ?? {})} />);
            const outDirPath = path.resolve(process.cwd(), 'build');
            logger.info('Writing file ' + `${htmlFileName}.html`);
            fs.writeFileSync(
                path.resolve(outDirPath, `${htmlFileName}.html`), 
                replaceAll(
                    htmlFile, 
                    {
                        app: pageAsReactString,
                        jsBundle: bundle,
                        title,
                        cssSheets: styles
                    })
            );
            logger.info('Write successful!');
        } catch (e) {
            logger.error('Operation failed.')
            logger.error(e);
            logger.info('Continuing...')
        }
    }
    logger.info("Operation over.")
})();

