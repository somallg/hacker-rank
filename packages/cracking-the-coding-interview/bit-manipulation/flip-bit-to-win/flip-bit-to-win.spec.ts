/**
 * Test specs for flip-bit-to-win problem
 * FlipBitToWin
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { flipBitToWin } from './flip-bit-to-win';
import * as fixture from './flip-bit-to-win.fixture.json';

describe('CrackingTheCodingInterview - FlipBitToWin', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    flipBitToWin
  );
});
