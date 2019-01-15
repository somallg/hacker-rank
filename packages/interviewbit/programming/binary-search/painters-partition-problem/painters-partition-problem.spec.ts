/**
 * Test specs for painters-partition-problem problem
 * PaintersPartitionProblem
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { paintersPartitionProblem } from './painters-partition-problem';
import * as fixture from './painters-partition-problem.fixture.json';

type Input = [number, number, number[]];
type Output = number;

describe('Interviewbit - PaintersPartitionProblem', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([k, unitTime, l]: Input) => paintersPartitionProblem(k, unitTime, l),
    paintersPartitionProblem.name,
    (inputSize: number) => [10, inputSize, generateArray(inputSize)]
  );
});
