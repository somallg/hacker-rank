/**
 * Test specs for implement-strstr problem
 * ImplementStrstr
 */
import { createTestExecutor, TestFixture } from '@challenges/util';

import { implementStrstr } from './implement-strstr';
import * as fixture from './implement-strstr.fixture.json';

type Input = [string, string];
type Output = number;

describe('Interviewbit - ImplementStrstr', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ([text, pattern]: Input) => implementStrstr(text, pattern),
    implementStrstr.name,
    (inputSize: number) => [
      'ab'.repeat(inputSize),
      'ab'.repeat(inputSize >>> 1)
    ]
  );
});
