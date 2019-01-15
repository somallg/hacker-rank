/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import { createTestExecutor, generateArray, TestFixture } from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';
import * as fixture from './<%= problem %>.fixture.json';

type Input = number;
type Output = number;

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      <%= functionName %>,
      <%= functionName %>.name,
      generateArray
    );
});
