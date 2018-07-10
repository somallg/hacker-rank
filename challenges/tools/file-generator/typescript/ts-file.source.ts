import { SourceFn } from '../type';

const tsFileSource: SourceFn = ({
  challengeName,
  problem,
  functionName,
  url
}) => {
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
