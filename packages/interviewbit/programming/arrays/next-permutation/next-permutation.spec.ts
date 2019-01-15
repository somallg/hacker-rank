/**
 * Test specs for next-permutation problem
 * Interviewbit - NextPermutation
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { nextPermutation } from './next-permutation';
import * as fixture from './next-permutation.fixture.json';

describe('Interviewbit - NextPermutation', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], number[]>> fixture)
    .executeTests(nextPermutation, generateArray);
});
