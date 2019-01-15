/**
 * Test specs for string-compression problem
 * StringCompression
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { stringCompression } from './string-compression';
import * as fixture from './string-compression.fixture.json';

describe('CrackingTheCodingInterview - StringCompression', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<string, string>> fixture)
    .executeTests(
      stringCompression
    );
});
