/**
 * Test specs for boolean-evaluation problem
 * BooleanEvaluation
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { countEval } from './boolean-evaluation';
import * as fixture from './boolean-evaluation.fixture.json';

type Input = {
  s: string;
  target: boolean;
};
type Output = number;

describe('CrackingTheCodingInterview - BooleanEvaluation', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ({ s, target }: Input) => countEval(s, target),
    countEval.name
  );
});
