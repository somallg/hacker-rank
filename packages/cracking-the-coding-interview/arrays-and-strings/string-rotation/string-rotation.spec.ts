/**
 * Test specs for string-rotation problem
 * StringRotation
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { stringRotation } from './string-rotation';
import * as fixture from './string-rotation.fixture.json';

type Input = [string, string];
type Output = boolean;

describe('CrackingTheCodingInterview - StringRotation', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([s1, s2]: Input) => stringRotation(s1, s2),
      stringRotation.name
    );
});
