/**
 * Test specs for number-swapper problem
 * NumberSwapper
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { numberSwapper } from './number-swapper';
import * as fixture from './number-swapper.fixture.json';

type Input = [number, number];
type Output = [number, number];

describe('CrackingTheCodingInterview - NumberSwapper', (): void => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([a, b]: Input): Output => numberSwapper(a, b),
    numberSwapper.name,
    (inputSize: number): Output => [Math.random() * inputSize, Math.random() * inputSize]
  );
});
