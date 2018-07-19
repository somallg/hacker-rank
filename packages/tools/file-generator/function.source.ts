import { camelize, pascalize } from '../utils/string.util';

interface ChallengeFunctionName {
  [key: string]: string;
}

function getFunctionName(challengeName: string, problem: string): string {
  return (
    ({
      codility: 'solution',
      hackerearth: `solve${pascalize(problem)}`,
      hackerrank: `solve${pascalize(problem)}`,
      interviewbit: `${camelize(problem)}`,
      leetcode: `${camelize(problem)}`,
      spoj: `${camelize(problem)}`
    } as ChallengeFunctionName)[challengeName] || `${camelize(problem)}`
  );
}

export { getFunctionName };
