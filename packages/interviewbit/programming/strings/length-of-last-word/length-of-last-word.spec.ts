/**
 * Test specs for length-of-last-word problem
 * LengthOfLastWord
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { lengthOfLastWord } from './length-of-last-word';
import * as fixture from './length-of-last-word.fixture.json';

describe('Interviewbit - LengthOfLastWord', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<string, number>>fixture)
      .executeTests(lengthOfLastWord, (inputSize: number) => 'A'.repeat(inputSize));
});
