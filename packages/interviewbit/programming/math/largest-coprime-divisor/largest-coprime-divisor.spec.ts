/**
 * Test specs for largest-coprime-divisor problem
 * LargestCoprimeDivisor
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { largestCoprimeDivisor } from './largest-coprime-divisor';
import * as fixture from './largest-coprime-divisor.fixture.json';

type Input = [number, number];
type Output = number;

describe('Interviewbit - LargestCoprimeDivisor', () => {
  // prettier-ignore
  // tslint:disable:insecure-random
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([a, b]: Input) => largestCoprimeDivisor(a, b),
      largestCoprimeDivisor.name,
      (inputSize: number) => [
        Math.floor(Math.random() * inputSize) + 1,
        Math.floor(Math.random() * inputSize) + 1
      ]
  );
});
