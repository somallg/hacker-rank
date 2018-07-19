import { strings } from '@angular-devkit/core';

interface SwitchOptions {
  [key: string]: string;
}

function getChallengeName(path: string): string {
  const [, challenge] = path.split('/');

  return challenge;
}

function getFunctionName(challengeName: string, problem: string): string {
  // set default name to camelCase
  const camelizedProblemName = strings.camelize(problem);
  const classifiedProblemName = strings.classify(problem);

  return (
    ({
      codility: 'solution',
      hackerearth: `solve${classifiedProblemName}`,
      hackerrank: `solve${classifiedProblemName}`,
      interviewbit: camelizedProblemName,
      leetcode: camelizedProblemName,
      spoj: camelizedProblemName
    } as SwitchOptions)[challengeName] || camelizedProblemName
  );
}

function getUrl(challengeName: string, problem: string) {
  return (
    ({
      hackerrank: ` @url https://www.hackerrank.com/challenges/${problem}/problem`
    } as SwitchOptions)[challengeName] || strings.classify(problem)
  );
}

export { getChallengeName, getFunctionName, getUrl };
