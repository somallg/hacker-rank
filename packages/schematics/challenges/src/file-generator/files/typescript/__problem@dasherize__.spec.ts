/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import { createTestExecutor, Fixture, generateArray } from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';

import * as fixture from './<%= problem %>.fixture.json';
const testFixture = fixture as Fixture<number, number>;

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', () => {
  createTestExecutor(testFixture).executeTest(
    <%= functionName %>.name,
    <%= functionName %>,
    generateArray
  );
});
