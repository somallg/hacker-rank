import { SourceFn } from '../type';

const pyFileSource: SourceFn = ({ functionName }) => {
  return `# pylint: disable=missing-docstring

def ${functionName}(array):
  return array
`;
};

export { pyFileSource };
