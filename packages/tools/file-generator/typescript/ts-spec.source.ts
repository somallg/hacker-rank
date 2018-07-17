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
  getPerformanceTestCaseDescription,
  getTestCaseDescription,
  generateArray
} from '@challenges/util';

import { ${functionName} } from './${problem}';
import * as fixture from './${problem}.fixture.json';

describe('${pascalize(challengeName)} - ${pascalize(problem)}', () => {
  describe('${functionName}', () => {
    describe('Example tests', () =>
      (fixture as Fixture<number, number>).exampleTests.forEach(testCase =>
        it(\`\${getTestCaseDescription(testCase)}\`, () =>
          expect(${functionName}(testCase.input)).toEqual(testCase.output))
      ));

    describe('Correctness tests', () =>
      (fixture as Fixture<number, number>).correctnessTests.forEach(testCase =>
        it(\`\${getTestCaseDescription(testCase)}\`, () =>
          expect(${functionName}(testCase.input)).toEqual(testCase.output))
      ));

    xdescribe('Performance tests', () =>
      (fixture as Fixture<number, number>).performanceTests.forEach(testCase =>
        it(\`\${getPerformanceTestCaseDescription(testCase)}\`, () =>
          expect(${functionName}(generateArray(testCase.inputSize))).toBeDefined())
      ));
  });
});
`;
};

export { tsSpecSource };