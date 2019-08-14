/**
 * Test specs for recursive-multiply problem
 * RecursiveMultiply
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { recursiveMultiply } from './recursive-multiply';
import * as fixture from './recursive-multiply.fixture.json';

type Input = number[];
type Output = number;

describe('CrackingTheCodingInterview - RecursiveMultiply', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([a, b]: [number, number]) => recursiveMultiply(a, b),
    );
});
