/**
 * Test specs for eight-queens problem
 * EightQueens
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { eightQueens } from './eight-queens';
import * as fixture from './eight-queens.fixture.json';

type Input = number;
type Output = number;

describe('CrackingTheCodingInterview - EightQueens', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(eightQueens, identityf);
});
