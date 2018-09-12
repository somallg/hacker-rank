/**
 * Test specs for grid-unique-paths problem
 * GridUniquePaths
 */

import * as ut from '@challenges/util';

import { gridUniquePaths } from './grid-unique-paths';
import * as fixture from './grid-unique-paths.fixture.json';

describe('Interviewbit - GridUniquePaths', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number, number], number>)
    .executeTests(([row, col]) => gridUniquePaths(row, col), inputSize => [inputSize, inputSize]);
});
