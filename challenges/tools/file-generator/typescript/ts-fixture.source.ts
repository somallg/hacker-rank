import { SourceFn } from '../type';

import { pascalize } from '../../utils/string.util';

const tsFixtureSource: SourceFn = ({ challengeName, problem }) => {
  return `{
  "name": "${pascalize(problem, ' ')} Fixture",
  "exampleTests": [
    {
      "name": "Example 1",
      "input": [1, 3, 4],
      "output": 1
    },
    {
      "name": "Example 2",
      "input": [1, 2, 3, 4],
      "output": 1
    }
  ],
  "correctnessTests": [
    {
      "name": "Sample 1",
      "input": [1, 2],
      "output": 1
    },
    {
      "name": "Sample 2",
      "input": [1, 2, 3],
      "output": 2
    },
    {
      "name": "Sample 3",
      "input": [1, 2, 3, 4],
      "output": 3
    },
    {
      "name": "Extreme 1",
      "input": [],
      "output": 0
    },
    {
      "name": "Extreme 2",
      "input": [1],
      "output": 1
    }
  ],
  "performanceTests": [
    {
      "name": "Medium 1",
      "inputSize": 100
    },
    {
      "name": "Medium 2",
      "inputSize": 1e3
    },
    {
      "name": "Large 1",
      "inputSize": 10e3
    },
    {
      "name": "Large 2",
      "inputSize": 50e3
    },
    {
      "name": "Large 3",
      "inputSize": 100e3
    }
  ]
}`;
};

export { tsFixtureSource };