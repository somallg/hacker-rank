import { pascalize } from '../utils/string.util';

function fileSource(problem: string): string {
  return `/**
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

function solve${pascalize(problem)}(arr: number[]): number {
  let result = 0;

  return result;
}

export { solve${pascalize(problem)} };`;
}

export { fileSource };
