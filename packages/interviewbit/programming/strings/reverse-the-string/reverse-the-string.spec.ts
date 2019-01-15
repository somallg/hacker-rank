/**
 * Test specs for reverse-the-string problem
 * ReverseTheString
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { reverseTheString } from './reverse-the-string';
import * as fixture from './reverse-the-string.fixture.json';

describe('Interviewbit - ReverseTheString', () => {
  createTestExecutor(<TestFixture<string, string>>fixture).executeTests(
    reverseTheString,
    generateString
  );
});
