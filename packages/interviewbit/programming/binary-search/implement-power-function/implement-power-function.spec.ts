/**
 * Test specs for implement-power-function problem
 * ImplementPowerFunction
 */

import * as ut from '@challenges/util';

import { implementPowerFunction } from './implement-power-function';
import * as fixture from './implement-power-function.fixture.json';

type InputType = [number, number, number];

describe('Interviewbit - ImplementPowerFunction', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<InputType, number>)
    .executeTests(
      ([x, n, d]) => implementPowerFunction(x, n, d),
      implementPowerFunction.name,
      inputSize => [inputSize, inputSize >>> 1, inputSize]
    );
});
