/**
 * Test specs for add-binary-strings problem
 * AddBinaryStrings
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { addBinaryStrings } from './add-binary-strings';
import * as fixture from './add-binary-strings.fixture.json';

type Input = [string, string];
type Output = string;

describe('Interviewbit - AddBinaryStrings', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([a, b]: Input) => addBinaryStrings(a, b),
      addBinaryStrings.name,
      (inputSize: number) => [
        generateArray(inputSize, 1).toString(),
        generateArray(inputSize, 1).toString()
      ]
    );
});
