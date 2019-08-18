/**
 * Test specs for permutations-without-dups problem
 * PermutationsWithoutDups
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { permutationsOfEveryN, permutationsOfFirstN } from './permutations-without-dups';
import * as fixture from './permutations-without-dups.fixture.json';
import * as fixture2 from './permutations-without-dups.fixture2.json';

type Input = string;
type Output = string[];

describe('CrackingTheCodingInterview - PermutationsWithoutDups', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(permutationsOfFirstN);

  createTestExecutor(<TestFixture<Input, Output>>fixture2).executeTests(permutationsOfEveryN);
});
