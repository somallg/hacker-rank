/**
 * Test specs for sorted-insert-position problem
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { sortedInsertPosition } from './sorted-insert-position';
import * as fixture from './sorted-insert-position.fixture.json';

type Input = [number[], number];
type Output = number;

describe('Interviewbit - SortedInsertPosition', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([array, target]: Input) => sortedInsertPosition(array, target),
    sortedInsertPosition.name,
    (inputSize: number) => [generateArray(inputSize, 1), 2]
  );
});
