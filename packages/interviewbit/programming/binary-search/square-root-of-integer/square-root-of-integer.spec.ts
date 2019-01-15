/**
 * Test specs for square-root-of-integer problem
 * SquareRootOfInteger
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { squareRootOfInteger } from './square-root-of-integer';
import * as fixture from './square-root-of-integer.fixture.json';

describe('Interviewbit - SquareRootOfInteger', () => {
  createTestExecutor(<TestFixture<number, number>>fixture).executeTests(
    squareRootOfInteger,
    identityf
  );
});
