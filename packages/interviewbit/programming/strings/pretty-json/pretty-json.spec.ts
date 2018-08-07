/**
 * Test specs for pretty-json problem
 * PrettyJson
 */

import { Fixture, getTestCaseDescription } from '@challenges/util';

import { prettyJson } from './pretty-json';
import * as fixture from './pretty-json.fixture.json';

describe('Interviewbit - PrettyJson', () => {
  describe('prettyJson', () => {
    (fixture as Fixture<string, string[]>).testCategories.forEach(
      (testCategory, index) => {
        describe(`${testCategory.name}`, () => {
          testCategory.testCases.forEach(testCase => {
            if (index < 2) {
              it(`${getTestCaseDescription(testCase)}`, () =>
                expect(prettyJson(testCase.input)).toEqual(testCase.output));
            }
          });
        });
      }
    );
  });
});
