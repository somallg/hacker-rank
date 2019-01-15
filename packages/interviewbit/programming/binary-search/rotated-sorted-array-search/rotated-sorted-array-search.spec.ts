/**
 * Test specs for rotated-sorted-array-search problem
 * RotatedSortedArraySearch
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { rotatedSortedArraySearch } from './rotated-sorted-array-search';
import * as fixture from './rotated-sorted-array-search.fixture.json';

type Input = [number[], number];
type Output = number;

describe('Interviewbit - RotatedSortedArraySearch', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([array, target]: Input) => rotatedSortedArraySearch(array, target),
      rotatedSortedArraySearch.name,
      (inputSize: number)=> [generateArray(inputSize), inputSize]
    );
});
