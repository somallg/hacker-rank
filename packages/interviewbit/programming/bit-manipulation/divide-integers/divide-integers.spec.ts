/**
 * Test specs for divide-integers problem
 * DivideIntegers
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { divideIntegers } from './divide-integers';

import * as fixture from './divide-integers.fixture.json';

type Input = [number, number];
type Output = number;

describe('Interviewbit - DivideIntegers', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([a, b]: Input) => divideIntegers(a, b),
    divideIntegers.name,
    (inputSize: number) => [inputSize, 3]
  );
});
