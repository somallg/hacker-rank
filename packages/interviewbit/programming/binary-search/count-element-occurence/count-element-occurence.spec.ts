/**
 * Test specs for count-element-occurence problem
 * CountElementOccurence
 */

import * as ut from '@challenges/util';

import { countElementOccurence } from './count-element-occurence';
import * as fixture from './count-element-occurence.fixture.json';

describe('Interviewbit - CountElementOccurence', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number], number>)
    .executeTests(
      ([array, target]) => countElementOccurence(array, target),
      countElementOccurence.name,
      inputSize => [ut.generateArray(inputSize), inputSize >>> 1]);
});
