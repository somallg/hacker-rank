/**
 * Test specs for reverse-the-string problem
 * ReverseTheString
 */

import * as ut from '@challenges/util';

import { reverseTheString } from './reverse-the-string';

import * as fixture from './reverse-the-string.fixture.json';

describe('Interviewbit - ReverseTheString', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, string>)
    .executeTests(
      reverseTheString,
      ut.generateString
    );
});
