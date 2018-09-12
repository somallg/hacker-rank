/**
 * Test specs for <%= problem %> problem
 * <%= challengeUrl %>
 */

import * as ut from '@challenges/util';

import { <%= functionName %> } from './<%= problem %>';
import * as fixture from './<%= problem %>.fixture.json';

describe('<%= classify(challengeName) %> - <%= classify(problem) %>', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number, number>)
    .executeTests(
      <%= functionName %>,
      <%= functionName %>.name,
      ut.generateArray
    );
});
