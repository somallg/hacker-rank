const { lstatSync, readdirSync } = require('fs');
const { basename, join } = require('path');

function isDirectory(source) {
  return lstatSync(source).isDirectory();
}

function getDirectories(source) {
  return readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(p => basename(p));
}

module.exports = {
  getDirectories
};
