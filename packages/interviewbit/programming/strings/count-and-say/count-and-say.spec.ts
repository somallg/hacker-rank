/**
 * Test specs for count-and-say problem
 * CountAndSay
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';
import { countAndSay } from './count-and-say';

import * as fixture from './count-and-say.fixture.json';

describe('Interviewbit - CountAndSay', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number, string>>fixture)
    .executeTests(
      countAndSay,
      identityf
    );
});
