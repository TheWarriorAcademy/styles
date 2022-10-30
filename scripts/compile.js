const sass = require('sass');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve(__dirname, '..', 'src', 'index.scss');
const outputRoot = path.resolve(__dirname, '..', 'dist');

const { css } = sass.compile(inputPath);

if (!fs.existsSync(outputRoot)) {
  fs.mkdirSync(outputRoot);
}

fs.writeFileSync(path.resolve(outputRoot, 'index.css'), css);
