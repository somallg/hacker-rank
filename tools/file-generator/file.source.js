const { pascalize } = require('../utils/string.util');

function fileSource(problem) {
  return `/**
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

function solve${pascalize(problem)}() {

}

module.exports = {
  solve${pascalize(problem)}
};`;
}

module.exports = {
  fileSource
};
