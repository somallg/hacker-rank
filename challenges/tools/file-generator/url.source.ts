import { pascalize } from '../utils/string.util';

function getUrl(challenge: string, problem: string) {
  return challenge === 'hackerrank'
    ? ` @url https://www.hackerrank.com/challenges/${problem}/problem`
    : ` ${pascalize(challenge)} - ${pascalize(problem)}`;
}

export { getUrl };
