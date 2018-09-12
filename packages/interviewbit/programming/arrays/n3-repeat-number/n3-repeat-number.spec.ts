/**
 * Test specs for n3-repeat-number problem
 * Interviewbit - N3RepeatNumber
 */
import * as ut from '@challenges/util';

import { n3RepeatNumber } from './n3-repeat-number';
import * as fixture from './n3-repeat-number.fixture.json';

describe('Interviewbit - N3RepeatNumber', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number>)
    .executeTests(n3RepeatNumber, ut.generateArray);
});
