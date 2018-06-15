import { camelize, pascalize } from '../utils/string.util';

function getFunctionName(challenge: string, problem: string): string {
  return {
    codility: 'solution',
    'hacker-earth': `solve${pascalize(problem)}`,
    'hacker-rank': `solve${pascalize(problem)}`,
    interviewbit: `${pascalize(problem)}`,
    leetcode: `${camelize(problem)}`
  }[challenge];
}

export { getFunctionName };
