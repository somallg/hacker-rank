import { SourceFn } from '../type';

const tsFileSource: SourceFn = ({ functionName, url }) => {
  return `/**
 *${url}
 */

function ${functionName}(array: number[]): number {
  const l = array.length;
  let result = 0;

  return result;
}

export { ${functionName} };`;
};

export { tsFileSource };
