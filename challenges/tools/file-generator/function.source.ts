import { pascalize } from '../utils/string.util';

function getFunctionName(challenge: string, problem: string): string {
  return challenge === 'codility' ? 'solution' : `solve${pascalize(problem)}`;
}

export { getFunctionName };
