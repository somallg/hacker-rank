/**
 * Test specs for all-factors problem
 * Interviewbit - AllFactors
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { allFactors } from './all-factors';
import * as fixture from './all-factors.fixture.json';

describe('Interviewbit - AllFactors', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number, number[]>>fixture)
    .executeTests(allFactors, identityf);
});
