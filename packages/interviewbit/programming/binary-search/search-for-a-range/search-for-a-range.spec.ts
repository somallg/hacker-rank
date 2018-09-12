/**
 * Test specs for search-for-a-range problem
 * SearchForARange
 */

import * as ut from '@challenges/util';

import { searchForARange } from './search-for-a-range';
import * as fixture from './search-for-a-range.fixture.json';

describe('Interviewbit - SearchForARange', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number], number[]>)
    .executeTests(
      ([array, target]) => searchForARange(array, target),
      searchForARange.name,
      inputSize => [ut.generateArray(inputSize, 1), inputSize >>> 1]
    );
});
