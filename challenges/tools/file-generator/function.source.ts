import { camelize, pascalize } from '../utils/string.util';

function getFunctionName(challenge: string, problem: string): string {
  return (
    {
      codility: 'solution',
      hackerearth: `solve${pascalize(problem)}`,
      hackerrank: `solve${pascalize(problem)}`,
      interviewbit: `${camelize(problem)}`,
      leetcode: `${camelize(problem)}`,
      spoj: `${camelize(problem)}`
    }[challenge] || `${camelize(problem)}`
  );
}

export { getFunctionName };
