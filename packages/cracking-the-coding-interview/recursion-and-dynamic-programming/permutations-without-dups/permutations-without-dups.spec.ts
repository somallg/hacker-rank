/**
 * Test specs for permutations-without-dups problem
 * PermutationsWithoutDups
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { permutationsOfFirstN } from './permutations-without-dups';
import * as fixture from './permutations-without-dups.fixture.json';

type Input = string;
type Output = string[];

describe('CrackingTheCodingInterview - PermutationsWithoutDups', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      permutationsOfFirstN
    );
});
