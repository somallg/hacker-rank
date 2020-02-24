/**
 * Test specs for tic-tac-win problem
 * TicTacWin
 */

import { createTestExecutor, generateMatrix, TestFixture } from '@challenges/util';

import { ticTacWin } from './tic-tac-win';
import * as fixture from './tic-tac-win.fixture.json';

type Input = number[][];
type Output = number;

describe('CrackingTheCodingInterview - TicTacWin', (): void => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(ticTacWin, generateMatrix);
});
