/**
 * Test specs for implement-strstr problem
 * ImplementStrstr
 */

import * as ut from '@challenges/util';

import { implementStrstr } from './implement-strstr';
import * as fixture from './implement-strstr.fixture.json';

describe('Interviewbit - ImplementStrstr', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, string], number>)
    .executeTests(
      ([text, pattern]) => implementStrstr(text, pattern),
      implementStrstr.name,
      inputSize => ['ab'.repeat(inputSize), 'ab'.repeat(inputSize >>> 1)]
  );
});
