/**
 * Test specs for divide-integers problem
 * DivideIntegers
 */

import * as ut from '@challenges/util';

import { divideIntegers } from './divide-integers';

import * as fixture from './divide-integers.fixture.json';
const testFixture = fixture as ut.TestFixture<[number, number], number>;

describe('Interviewbit - DivideIntegers', () => {
  ut.createTestExecutor(testFixture).executeTests(
    ([a, b]) => divideIntegers(a, b),
    divideIntegers.name,
    inputSize => [inputSize, 3]
  );
});
