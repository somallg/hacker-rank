/**
 * Test specs for pond-sizes problem
 * PondSizes
 */

import { createTestExecutor, generateMatrix, TestFixture } from '@challenges/util';

import { pondSizes } from './pond-sizes';
import * as fixture from './pond-sizes.fixture.json';

type Input = number[][];
type Output = number[];

describe('CrackingTheCodingInterview - PondSizes', (): void => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    pondSizes,
    (inputSize: number): Input => generateMatrix(inputSize, 2)
  );
});
