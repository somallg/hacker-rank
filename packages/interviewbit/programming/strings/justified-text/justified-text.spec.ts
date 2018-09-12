/**
 * Test specs for justified-text problem
 * JustifiedText
 */

import * as ut from '@challenges/util';

import { justifiedText } from './justified-text';

import * as fixture from './justified-text.fixture.json';

describe('Interviewbit - JustifiedText', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[string[], number], string[]>)
    .executeTests(
      ([words, len]) => justifiedText(words, len),
      justifiedText.name
  );
});
