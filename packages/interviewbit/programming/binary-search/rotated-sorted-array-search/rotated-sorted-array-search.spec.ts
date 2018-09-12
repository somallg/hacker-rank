/**
 * Test specs for rotated-sorted-array-search problem
 * RotatedSortedArraySearch
 */

import * as ut from '@challenges/util';

import { rotatedSortedArraySearch } from './rotated-sorted-array-search';
import * as fixture from './rotated-sorted-array-search.fixture.json';

describe('Interviewbit - RotatedSortedArraySearch', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number], number>)
    .executeTests(
      ([array, target]) => rotatedSortedArraySearch(array, target),
      rotatedSortedArraySearch.name,
      inputSize => [ut.generateArray(inputSize), inputSize]
    );
});
