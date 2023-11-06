import path from 'path';
import fs from 'fs';
import frontmatter from 'front-matter';

let version;
const existingMetadataPath = path.resolve(process.cwd(), 'src', 'contexts', 'data', 'writ.json'),
    readFileOptions = { encoding: 'utf-8' };
const existingMetadata = JSON.parse(fs.readFileSync(existingMetadataPath, readFileOptions));
const [major, minor, patch] = existingMetadata.version.split(".");
version = [major, minor, +patch + 1].join(".");

(async function() {
    let didError = false;
    let error;
    let blob = {
        version,
        metadata: []
    };

    try {
        const mdSeasons = fs.readdirSync(path.resolve(process.cwd(), 'writ'));
        if (!mdSeasons) {
            throw new Error('Unable to read writ dir.');
        }
        for (const season of mdSeasons) {
            const seasonContents = fs.readdirSync(path.resolve(process.cwd(), 'writ', season));
            for (const story of seasonContents) {
                const loadedFile = fs.readFileSync(path.resolve(process.cwd(), 'writ', season, story), { encoding: 'utf-8' });
                const parsedFrontmatter = frontmatter(loadedFile);
                if (!parsedFrontmatter.attributes) {
                    throw new Error('Could not parse frontmatter.');
                }
                const key = `season_${season}_episode_${parsedFrontmatter.attributes.episodeKey}`;
                blob.metadata.push(Object.assign({}, { longKey: key, ...parsedFrontmatter.attributes }));
            }
        }
        const autoGenFilePath = path.resolve(process.cwd(), 'src', 'contexts', 'data', 'writ.json');
        if (fs.existsSync(autoGenFilePath)) {
            fs.rmSync(autoGenFilePath);
        }
        fs.writeFileSync(autoGenFilePath, JSON.stringify(blob), { encoding: 'utf-8' });
    } catch (e) {
        didError = true;
        error = e;
    } finally {
        if (didError) {
            console.error(error);
            process.exit(1);
        }
        console.log('Process exited successfully.')
    }
})();
