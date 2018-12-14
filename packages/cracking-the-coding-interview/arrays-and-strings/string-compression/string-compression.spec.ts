/**
 * Test specs for string-compression problem
 * StringCompression
 */

import * as ut from '@challenges/util';

import { stringCompression } from './string-compression';
import * as fixture from './string-compression.fixture.json';

describe('CrackingTheCodingInterview - StringCompression', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, string>)
    .executeTests(
      stringCompression
    );
});
