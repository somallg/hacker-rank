/**
 * Test specs for binary-to-string problem
 * BinaryToString
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { binaryToString } from './binary-to-string';
import * as fixture from './binary-to-string.fixture.json';

describe('CrackingTheCodingInterview - BinaryToString', () => {
  createTestExecutor(<TestFixture<number, string>>fixture).executeTests(
    binaryToString
  );
});
