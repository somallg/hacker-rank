/**
 * Test specs for find-permutation problem
 * Interviewbit - FindPermutation
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { findPermutation } from './find-permutation';
import * as fixture from './find-permutation.fixture.json';

type Input = [string, number];
type Output = number[];

describe('Interviewbit - FindPermutation', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([s, n]: Input) => findPermutation(s, n),
    (inputSize: number) => [generateString(inputSize), inputSize]
  );
});
