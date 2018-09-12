/**
 * Test specs for power-of-2 problem
 * PowerOf2
 */

import * as ut from '@challenges/util';

import { powerOf2 } from './power-of-2';

import * as fixture from './power-of-2.fixture.json';

describe('Interviewbit - PowerOf2', () => {
  ut.createTestExecutor(fixture as ut.TestFixture<string, number>).executeTests(
    powerOf2,
    inputSize => inputSize.toString()
  );
});
