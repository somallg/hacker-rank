/**
 * Test specs for sorted-insert-position problem
 */

import * as ut from '@challenges/util';

import { sortedInsertPosition } from './sorted-insert-position';
import * as fixture from './sorted-insert-position.fixture.json';
const testFixture = fixture as ut.TestFixture<[number[], number], number>;

describe('Interviewbit - SortedInsertPosition', () => {
  ut.createTestExecutor(testFixture).executeTests(
    ([array, target]) => sortedInsertPosition(array, target),
    sortedInsertPosition.name,
    inputSize => [ut.generateArray(inputSize, 1), 2]
  );
});
