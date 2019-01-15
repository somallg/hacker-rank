/**
 * Test specs for implement-power-function problem
 * ImplementPowerFunction
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { implementPowerFunction } from './implement-power-function';
import * as fixture from './implement-power-function.fixture.json';

type Input = [number, number, number];

describe('Interviewbit - ImplementPowerFunction', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, number>>fixture)
    .executeTests(
      ([x, n, d]: Input) => implementPowerFunction(x, n, d),
      implementPowerFunction.name,
      (inputSize: number) => [inputSize, inputSize >>> 1, inputSize]
    );
});
