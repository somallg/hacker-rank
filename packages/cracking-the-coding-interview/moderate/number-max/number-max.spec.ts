/**
 * Test specs for number-max problem
 * NumberMax
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { numberMax } from './number-max';
import * as fixture from './number-max.fixture.json';

type Input = [number, number];
type Output = number;

describe('CrackingTheCodingInterview - NumberMax', (): void => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([a, b]: Input): Output => numberMax(a, b),
    numberMax.name
  );
});
