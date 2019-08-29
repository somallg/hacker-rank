/**
 * Test specs for parens problem
 * Parens
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { parens } from './parens';
import * as fixture from './parens.fixture.json';

type Input = number;
type Output = string[];

describe('CrackingTheCodingInterview - Parens', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(parens);
});
