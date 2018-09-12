/**
 * Test specs for single-number problem
 * SingleNumber
 */

import * as ut from '@challenges/util';

import { singleNumber } from './single-number';
import * as fixture from './single-number.fixture.json';

describe('Interviewbit - SingleNumber', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], number>)
    .executeTests(singleNumber, ut.generateArray);
});
