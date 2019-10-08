/**
 * Test specs for sorted-matrix-search problem
 * SortedMatrixSearch
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { sortedMatrixSearch } from './sorted-matrix-search';
import * as fixture from './sorted-matrix-search.fixture.json';

type Input = {
  matrix: number[][];
  target: number;
};
type Output = number[];

describe('CrackingTheCodingInterview - SortedMatrixSearch', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ({ matrix, target }: Input) => sortedMatrixSearch(matrix, target),
    sortedMatrixSearch.name
  );
});
