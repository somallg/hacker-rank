/**
 * Test specs for all-factors problem
 * Interviewbit - AllFactors
 */

import * as ut from '@challenges/util';

import { allFactors } from './all-factors';
import * as fixture from './all-factors.fixture.json';

describe('Interviewbit - AllFactors', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, number[]>)
    .executeTests(allFactors, ut.identityf);
});
