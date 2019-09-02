/**
 * Test specs for coins problem
 * Coins
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { makeChange } from './coins';
import * as fixture from './coins.fixture.json';

type Input = number;
type Output = number;

describe('CrackingTheCodingInterview - Coins', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(makeChange);
});
