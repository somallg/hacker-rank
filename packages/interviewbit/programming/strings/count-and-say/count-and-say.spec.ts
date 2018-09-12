/**
 * Test specs for count-and-say problem
 * CountAndSay
 */

import * as ut from '@challenges/util';

import { countAndSay } from './count-and-say';

import * as fixture from './count-and-say.fixture.json';

describe('Interviewbit - CountAndSay', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, string>)
    .executeTests(
      countAndSay,
      ut.identityf
    );
});
