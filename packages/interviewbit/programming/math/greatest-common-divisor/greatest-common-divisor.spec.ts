/**
 * Test specs for greatest-common-divisor problem
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { greatestCommonDivisor } from './greatest-common-divisor';
import * as fixture from './greatest-common-divisor.fixture.json';

type Input = [number, number];
type Output = number;

describe('Interviewbit - GreatestCommonDivisor', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([m, n]: Input) => greatestCommonDivisor(m, n),
      greatestCommonDivisor.name,
      (inputSize: number) => [inputSize, inputSize >>> 1]
  );
});
