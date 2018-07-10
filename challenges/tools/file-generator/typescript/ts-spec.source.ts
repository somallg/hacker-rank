import { SourceFn } from '../type';

import { pascalize } from '../../utils/string.util';

const tsSpecSource: SourceFn = ({
  challengeName,
  problem,
  functionName,
  url
}) => {
  return `/**
 * Test specs for ${problem} problem
 *${url}
 */

import {
  Fixture,
  getTestCaseDescription,
  getPerformanceTestCaseDescription,
  generateArray
} from '@challenges/util';

import * as fixture from './${problem}.fixture.json';
import { ${functionName} } from './${problem}';

describe('${pascalize(challengeName)} - ${pascalize(problem)}', () => {
  describe('${functionName}', () => {
    describe('Example tests', () => {
      (fixture as Fixture).exampleTests.forEach((testCase) => {
        it(\`\${getTestCaseDescription(testCase)}\`, () => {
          expect(${functionName}(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    describe('Correctness tests', () => {
      (fixture as Fixture).correctnessTests.forEach((testCase) => {
        it(\`\${getTestCaseDescription(testCase)}\`, () => {
          expect(${functionName}(testCase.input)).toEqual(testCase.output);
        });
      });
    });

    xdescribe('Performance tests', () => {
      (fixture as Fixture).performanceTests.forEach((testCase) => {
        it(\`\${getPerformanceTestCaseDescription(testCase)}\`, () => {
          ${functionName}(generateArray(testCase.inputSize));
        });
      });
    });
  });
});
`;
};

export { tsSpecSource };
