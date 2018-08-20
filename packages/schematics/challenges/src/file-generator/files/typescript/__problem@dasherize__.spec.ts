/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import { createTestExecutor, generateArray, TestFixture } from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';

import * as fixture from './<%= problem %>.fixture.json';
const testFixture = fixture as TestFixture<number, number>;

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', () => {
  createTestExecutor(testFixture)(
    <%= functionName %>.name,
    <%= functionName %>,
    generateArray
  );
});
