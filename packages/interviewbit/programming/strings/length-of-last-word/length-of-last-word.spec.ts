/**
 * Test specs for length-of-last-word problem
 * LengthOfLastWord
 */

import * as ut from '@challenges/util';

import { lengthOfLastWord } from './length-of-last-word';

import * as fixture from './length-of-last-word.fixture.json';

describe('Interviewbit - LengthOfLastWord', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>)
    .executeTests(
      lengthOfLastWord,
      inputSize => 'A'.repeat(inputSize)
    );
});
