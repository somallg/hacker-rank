/**
 * Test specs for grid-unique-paths problem
 * GridUniquePaths
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { gridUniquePaths } from './grid-unique-paths';
import * as fixture from './grid-unique-paths.fixture.json';

type Input = [number, number];
type Output = number;

describe('Interviewbit - GridUniquePaths', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([row, col]: Input) => gridUniquePaths(row, col),
    (inputSize: number) => [inputSize, inputSize]
  );
});
