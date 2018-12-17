/**
 * Test specs for string-rotation problem
 * StringRotation
 */

import * as ut from '@challenges/util';

import { stringRotation } from './string-rotation';
import * as fixture from './string-rotation.fixture.json';

describe('CrackingTheCodingInterview - StringRotation', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string, string], boolean>)
    .executeTests(
      ([s1, s2]) => stringRotation(s1, s2),
      stringRotation.name
    );
});
