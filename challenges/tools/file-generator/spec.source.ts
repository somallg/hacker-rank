import { pascalize } from '../utils/string.util';

import { getFunctionName } from './function.source';
import { getUrl } from './url.source';

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
      it('should run for Medium input of 100 items', () => {
        ${functionName}(generateArray(100));
      }, 100);

      it('should run for Large 1 input of 10E3 items', () => {
        ${functionName}(generateArray(10E3));
      }, 100);

      it('should run for Large 2 input of 50E3 items', () => {
        ${functionName}(generateArray(50E3));
      }, 100);

      it('should run for Large 3 input of 100E3 items', () => {
        ${functionName}(generateArray(100E3));
      }, 100);
    });
  });
});
`;
}

export { specSource };
