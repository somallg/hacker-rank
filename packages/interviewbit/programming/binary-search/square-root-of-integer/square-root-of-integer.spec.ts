/**
 * Test specs for square-root-of-integer problem
 * SquareRootOfInteger
 */

import * as ut from '@challenges/util';

import { squareRootOfInteger } from './square-root-of-integer';
import * as fixture from './square-root-of-integer.fixture.json';

describe('Interviewbit - SquareRootOfInteger', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>).executeTests(
    squareRootOfInteger,
    ut.identityf
  );
});
