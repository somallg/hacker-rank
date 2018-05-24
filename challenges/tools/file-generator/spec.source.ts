import { pascalize } from '../utils/string.util';

import { getFunctionName } from './function.source';
import { getUrl } from './url.source';

const MEDIUM_SIZE_1 = '100';
const LARGE_SIZE_1 = '10e3';
const LARGE_SIZE_2 = '50e3';
const LARGE_SIZE_3 = '100e3';

function specSource(challenge = 'codility', problem: string): string {
  const functionName = getFunctionName(challenge, problem);
  const url = getUrl(challenge, problem);

  return `/**
 * Test specs for ${problem} problem
 *${url}
 */

import { generateArray } from '@challenges/util';

import { ${functionName} } from './${problem}';

describe('${pascalize(challenge)} - ${pascalize(problem)}', () => {
  describe('${functionName}', () => {
    describe('Example tests', () => {
      it('should return _ for Example 1 input []', () => {
        expect(${functionName}([])).toEqual(_);
      });

      it('should return _ for Example 2 input []', () => {
        expect(${functionName}([])).toEqual(_);
      });
    });

    describe('Correctness tests', () => {
      it('should return _ for Sample 1 input [1, 2, 3, 4]', () => {
        expect(${functionName}([1, 2, 3, 4])).toEqual(_);
      });

      it('should return _ for Sample 2 input [4, 3, 2, 1]', () => {
        expect(${functionName}([4, 3, 2, 1])).toEqual(_);
      });

      it('should return _ for Sample 3 input [4, 3, 2, 1]', () => {
        expect(${functionName}([4, 3, 2, 1])).toEqual(_);
      });

      it('should return _ for Extreme input []', () => {
        expect(${functionName}([])).toEqual(_);
      });

      it('should return _ for All Negative input [2, 1, 0]', () => {
        expect(${functionName}([2, 1])).toEqual(_);
      });

      it('should return _ for All Positive input [2, 1, 0]', () => {
        expect(${functionName}([2, 1])).toEqual(_);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of ${MEDIUM_SIZE_1} items', () => {
        ${functionName}(generateArray(${MEDIUM_SIZE_1}));
      });

      it('should run for Large 1 input of ${LARGE_SIZE_1} items', () => {
        ${functionName}(generateArray(${LARGE_SIZE_1}));
      });

      it('should run for Large 2 input of ${LARGE_SIZE_2} items', () => {
        ${functionName}(generateArray(${LARGE_SIZE_2}));
      });

      it('should run for Large 3 input of ${LARGE_SIZE_3} items', () => {
        ${functionName}(generateArray(${LARGE_SIZE_3}));
      });
    });
  });
});
`;
}

export { specSource };
