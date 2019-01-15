/**
 * Test specs for median-of-array problem
 * MedianOfArray
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { medianOfArray } from './median-of-array';
import * as fixture from './median-of-array.fixture.json';

type Input = [number[], number[]];
type Output = number;

describe('Interviewbit - MedianOfArray', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([a, b]: Input) => medianOfArray(a, b),
      medianOfArray.name,
      (inputSize: number)=> [generateArray(inputSize), generateArray(inputSize)]);
});
