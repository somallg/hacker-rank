/**
 * Test specs for pretty-json problem
 * PrettyJson
 */

import {
  createTestExecutor,
  generateString,
  TestFixture
} from '@challenges/util';

import { prettyJson } from './pretty-json';
import * as fixture from './pretty-json.fixture.json';

describe('Interviewbit - PrettyJson', () => {
  createTestExecutor(<TestFixture<string, string[]>>fixture).executeTests(
    prettyJson,
    generateString
  );
});
