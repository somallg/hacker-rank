/**
 * Test specs for matrix-search problem
 * MatrixSearch
 */

import * as ut from '@challenges/util';

import { matrixSearch } from './matrix-search';
import * as fixture from './matrix-search.fixture.json';

describe('Interviewbit - MatrixSearch', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[][], number], number>)
    .executeTests(
      ([matrix, target]) => matrixSearch(matrix, target),
      matrixSearch.name,
      inputSize => [ut.generateMatrix(inputSize), inputSize]
    );
});
