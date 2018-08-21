/**
 * Test specs for divide-integers problem
 * DivideIntegers
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { divideIntegers } from './divide-integers';

import * as fixture from './divide-integers.fixture.json';
const testFixture = fixture as TestFixture<[number, number], number>;

describe('Interviewbit - DivideIntegers', () => {
  createTestExecutor(testFixture)(
    divideIntegers.name,
    ([a, b]) => divideIntegers(a, b),
    inputSize => [inputSize, 3]
  );
});
