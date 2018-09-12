/**
 * Test specs for longest-common-prefix problem
 * LongestCommonPrefix
 */

import * as ut from '@challenges/util';

import { longestCommonPrefix } from './longest-common-prefix';

import * as fixture from './longest-common-prefix.fixture.json';

describe('Interviewbit - LongestCommonPrefix', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string[], string>)
    .executeTests(
      longestCommonPrefix,
      ut.generateStringArray
    );
});
