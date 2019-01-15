/**
 * Test specs for longest-common-prefix problem
 * LongestCommonPrefix
 */
import {
  createTestExecutor,
  generateStringArray,
  TestFixture
} from '@challenges/util';

import { longestCommonPrefix } from './longest-common-prefix';
import * as fixture from './longest-common-prefix.fixture.json';

describe('Interviewbit - LongestCommonPrefix', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<string[], string>>fixture)
        .executeTests(longestCommonPrefix, generateStringArray);
});
