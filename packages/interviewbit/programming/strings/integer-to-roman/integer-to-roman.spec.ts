/**
 * Test specs for integer-to-roman problem
 * IntegerToRoman
 */

import * as ut from '@challenges/util';

import { integerToRoman } from './integer-to-roman';
import * as fixture from './integer-to-roman.fixture.json';

describe('Interviewbit - IntegerToRoman', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, string>).executeTests(
    integerToRoman,
    ut.identityf
  );
});
