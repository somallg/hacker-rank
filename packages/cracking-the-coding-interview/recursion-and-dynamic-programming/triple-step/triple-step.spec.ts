/**
 * Test specs for triple-step problem
 * TripleStep
 */

import { createTestExecutor, identityf, TestFixture } from '@challenges/util';

import { tripleStep } from './triple-step';
import * as fixture from './triple-step.fixture.json';

type Input = number;
type Output = number;

describe('CrackingTheCodingInterview - TripleStep', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      tripleStep,
      undefined,
      identityf
    );
});
