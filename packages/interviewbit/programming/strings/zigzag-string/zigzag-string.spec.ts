/**
 * Test specs for zigzag-string problem
 * ZigzagString
 */
import * as ut from '@challenges/util';

import { zigzagString } from './zigzag-string';
import * as fixture from './zigzag-string.fixture.json';

describe('Interviewbit - ZigzagString', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, number], string>)
    .executeTests(
      ([text, nRows]) => zigzagString(text, nRows),
      zigzagString.name,
      inputSize => ['A'.repeat(inputSize), inputSize / 10]
    )
});
