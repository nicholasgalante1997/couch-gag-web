const fs = require('fs');
const path = require('path');

function trim(file) {
  return file.split('.')[0];
}

function getEntryObject() {
  /** Load pages from /hydrate-mounts directory */
  const dirContents = fs.readdirSync(path.resolve(process.cwd(), 'src', 'mounts'), { encoding: 'utf-8' });
  if (dirContents.length < 1) {
    throw new Error('Could not read "hydrate-mounts" directory.');
  }
  /** Map files to entry objects */
  let entryObject = {};
  for (const file of dirContents) {
    entryObject[trim(file)] = path.resolve(process.cwd(), 'src', 'mounts', file);
  }
  return entryObject;
}

module.exports = { trim, getEntryObject };
