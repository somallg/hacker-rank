import { pascalize } from '../utils/string.util';

function fileSource(problem) {
  return `/**
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

function solve${pascalize(problem)}() {

}

export { solve${pascalize(problem)} };`;
}

export { fileSource };
