/**
 * Test specs for pretty-json problem
 * PrettyJson
 */

import * as ut from '@challenges/util';

import { prettyJson } from './pretty-json';

import * as fixture from './pretty-json.fixture.json';

describe('Interviewbit - PrettyJson', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<string, string[]>)
    .executeTests(
      prettyJson,
      ut.generateString
    );
});
