import { pascalize } from '../utils/string.util';

function getUrl(challengeName: string, problem: string) {
  return challengeName === 'hackerrank'
    ? ` @url https://www.hackerrank.com/challenges/${problem}/problem`
    : ` ${pascalize(challengeName)} - ${pascalize(problem)}`;
}

export { getUrl };
