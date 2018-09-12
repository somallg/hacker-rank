/**
 * Test specs for painters-partition-problem problem
 * PaintersPartitionProblem
 */

import * as ut from '@challenges/util';

import { paintersPartitionProblem } from './painters-partition-problem';
import * as fixture from './painters-partition-problem.fixture.json';
// prettier-ignore
const testFixture = fixture as ut.TestFixture<[number, number, number[]], number>;

describe('Interviewbit - PaintersPartitionProblem', () => {
  ut.createTestExecutor(testFixture).executeTests(
    ([k, unitTime, l]) => paintersPartitionProblem(k, unitTime, l),
    paintersPartitionProblem.name,
    inputSize => [10, inputSize, ut.generateArray(inputSize)]
  );
});
