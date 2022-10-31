const path = require('path');
const fs = require('fs');

const previewDirectoryPath = path.resolve(__dirname, '..', 'preview');
const compiledStylesPath = path.resolve(__dirname, '..', 'dist', 'index.css');
const previewStylesPath = path.resolve(previewDirectoryPath, 'index.css');

fs.copyFileSync(
    compiledStylesPath,
    previewStylesPath
);
