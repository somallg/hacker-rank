import { SourceFn } from '../type';

const pyFileSource: SourceFn = ({
  challengeName,
  problem,
  functionName,
  url
}) => {
  return `# pylint: disable=missing-docstring

def ${functionName}(array):
  return array
`;
};

export { pyFileSource };
