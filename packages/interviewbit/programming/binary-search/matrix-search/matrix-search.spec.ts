/**
 * Test specs for matrix-search problem
 * MatrixSearch
 */

import {
  createTestExecutor,
  generateMatrix,
  TestFixture
} from '@challenges/util';

import { matrixSearch } from './matrix-search';
import * as fixture from './matrix-search.fixture.json';

type Input = [number[][], number];
type Output = number;

describe('Interviewbit - MatrixSearch', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([matrix, target]: Input) => matrixSearch(matrix, target),
      matrixSearch.name,
      (inputSize: number)=> [generateMatrix(inputSize), inputSize]
    );
});
