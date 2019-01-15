/**
 * Test specs for count-element-occurence problem
 * CountElementOccurence
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { countElementOccurence } from './count-element-occurence';
import * as fixture from './count-element-occurence.fixture.json';

type Input = [number[], number];
type Output = number;

describe('Interviewbit - CountElementOccurence', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([array, target]: Input) => countElementOccurence(array, target),
      countElementOccurence.name,
      (inputSize:number) => [generateArray(inputSize), inputSize >>> 1]);
});
