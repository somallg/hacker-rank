/**
 * Test specs for add-binary-strings problem
 * AddBinaryStrings
 */

import * as ut from '@challenges/util';

import { addBinaryStrings } from './add-binary-strings';

import * as fixture from './add-binary-strings.fixture.json';

describe('Interviewbit - AddBinaryStrings', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, string], string>)
    .executeTests(
      ([a, b]) => addBinaryStrings(a, b),
      addBinaryStrings.name,
      inputSize => [
        ut.generateArray(inputSize, 1).toString(),
        ut.generateArray(inputSize, 1).toString()
      ]
    );
});
