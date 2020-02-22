/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import { createTestExecutor, generateArray, TestFixture } from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';
import * as fixture from './<%= problem %>.fixture.json';

type Input = [number, number];
type Output = [number, number];

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', (): void => {
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([a, b]: Input): Output => <%= functionName %>(a),
      <%= functionName %>.name,
      (inputSize: number): Input => generateArray(inputSize)
    );
});
