/**
 * Test specs for permutations-with-duplicates problem
 * PermutationsWithDuplicates
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { permutationsWithDuplicates } from './permutations-with-duplicates';
import * as fixture from './permutations-with-duplicates.fixture.json';

type Input = string;
type Output = string[];

describe('CrackingTheCodingInterview - PermutationsWithDuplicates', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(permutationsWithDuplicates);
});
