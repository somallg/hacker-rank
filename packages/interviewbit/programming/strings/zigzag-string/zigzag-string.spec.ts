/**
 * Test specs for zigzag-string problem
 * ZigzagString
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { zigzagString } from './zigzag-string';
import * as fixture from './zigzag-string.fixture.json';

type Input = [string, number];
type Output = string;

describe('Interviewbit - ZigzagString', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([text, nRows]: Input) => zigzagString(text, nRows),
    zigzagString.name,
    (inputSize: number) => ['A'.repeat(inputSize), inputSize / 10]
  );
});
