import all from './all.js';
import recommended from './recommended.js';
import fs from 'fs/promises';

const allCpy = { ...all };

for (const key in allCpy.rules) {
  if (key in recommended.rules) delete allCpy.rules[key];
}

fs.writeFile('./_temp/diff.json', JSON.stringify(allCpy, null, 2), 'utf8');
