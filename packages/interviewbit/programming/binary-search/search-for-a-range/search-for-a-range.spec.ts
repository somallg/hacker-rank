/**
 * Test specs for search-for-a-range problem
 * SearchForARange
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { searchForARange } from './search-for-a-range';
import * as fixture from './search-for-a-range.fixture.json';

type Input = [number[], number];
type Output = number[];

describe('Interviewbit - SearchForARange', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([array, target]: Input) => searchForARange(array, target),
      searchForARange.name,
      (inputSize: number)=> [generateArray(inputSize, 1), inputSize >>> 1]
    );
});
