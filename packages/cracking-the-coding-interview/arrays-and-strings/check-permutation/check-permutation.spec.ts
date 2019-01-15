/**
 * Test specs for check-permutation problem
 * CheckPermutation
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { checkPermutation } from './check-permutation';
import * as fixture from './check-permutation.fixture.json';

type Input = [string, string];
type Output = boolean;

describe('CrackingTheCodingInterview - CheckPermutation', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([s, t]: Input) => checkPermutation(s, t),
      (inputSize: number) => [generateString(inputSize), generateString(inputSize)]);
});
