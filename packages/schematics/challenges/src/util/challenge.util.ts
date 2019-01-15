import { strings } from '@angular-devkit/core';

interface SwitchOptions {
  [key: string]: string;
}

function getChallengeName(path: string): string {
  const [, challenge]: string[] = path.split('/');

  return challenge;
}

function getFunctionName(challengeName: string, problem: string): string {
  // set default name to camelCase
  const camelizedProblemName: string = strings.camelize(problem);
  const classifiedProblemName: string = strings.classify(problem);

  return (
    // tslint:disable-next-line
    (<SwitchOptions>{
      codility: 'solution',
      hackerearth: `solve${classifiedProblemName}`,
      hackerrank: `solve${classifiedProblemName}`,
      interviewbit: camelizedProblemName,
      leetcode: camelizedProblemName,
      spoj: camelizedProblemName
    })[challengeName] || camelizedProblemName
  );
}

function getUrl(challengeName: string, problem: string): string {
  return (
    // tslint:disable-next-line
    (<SwitchOptions>{
      hackerrank: ` @url https://www.hackerrank.com/challenges/${problem}/problem`
    })[challengeName] || strings.classify(problem)
  );
}

export { getChallengeName, getFunctionName, getUrl };
