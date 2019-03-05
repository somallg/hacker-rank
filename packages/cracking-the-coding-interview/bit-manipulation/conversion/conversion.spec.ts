/**
 * Test specs for conversion problem
 * Conversion
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { conversion } from './conversion';
import * as fixture from './conversion.fixture.json';

describe('CrackingTheCodingInterview - Conversion', () => {
  createTestExecutor(<TestFixture<number[], number>>fixture).executeTests(
    ([a, b]: number[]) => conversion(a, b),
    conversion.name
  );
});
