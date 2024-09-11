const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'lib');
const modules = {};

fs.readdirSync(directoryPath).forEach(file => {
    if (file !== 'index.js' && file.endsWith('.js')) {
        const moduleName = path.basename(file, '.js');
        modules[moduleName] = require(path.join(directoryPath, file));
    }
});

module.exports = modules;
