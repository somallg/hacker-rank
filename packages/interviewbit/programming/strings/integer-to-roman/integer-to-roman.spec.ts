/**
 * Test specs for integer-to-roman problem
 * IntegerToRoman
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { integerToRoman } from './integer-to-roman';
import * as fixture from './integer-to-roman.fixture.json';

describe('Interviewbit - IntegerToRoman', () => {
  createTestExecutor(<TestFixture<number, string>>fixture).executeTests(
    integerToRoman,
    identityf
  );
});
