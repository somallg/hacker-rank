/**
 * Test specs for next-problem problem
 * NextProblem
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { nextNumber } from './next-number';
import * as fixture from './next-number.fixture.json';

describe('CrackingTheCodingInterview - NextNumber', () => {
  createTestExecutor(<TestFixture<number, number[]>>fixture).executeTests(
    nextNumber
  );
});
