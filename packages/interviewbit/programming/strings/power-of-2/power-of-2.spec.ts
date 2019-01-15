/**
 * Test specs for power-of-2 problem
 * PowerOf2
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { powerOf2 } from './power-of-2';
import * as fixture from './power-of-2.fixture.json';

describe('Interviewbit - PowerOf2', () => {
  createTestExecutor(<TestFixture<string, number>>fixture).executeTests(
    powerOf2,
    (inputSize: number) => inputSize.toString()
  );
});
