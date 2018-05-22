import { getFunctionName } from './function.source';
import { getUrl } from './url.source';

function fileSource(challenge = 'codility', problem: string): string {
  const functionName = getFunctionName(challenge, problem);
  const url = getUrl(challenge, problem);

  return `/**
 *${url}
 */

function ${functionName}(arr: number[]): number {
  let result = 0;

  return result;
}

export { ${functionName} };`;
}

export { fileSource };
