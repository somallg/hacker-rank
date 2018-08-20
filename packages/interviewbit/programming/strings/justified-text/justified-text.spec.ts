/**
 * Test specs for justified-text problem
 * JustifiedText
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { justifiedText } from './justified-text';

import * as fixture from './justified-text.fixture.json';
const testFixture = fixture as TestFixture<[string[], number], string[]>;

describe('Interviewbit - JustifiedText', () => {
  describe('justifiedText', () => {
    createTestExecutor(testFixture)(justifiedText.name, ([words, len]) =>
      justifiedText(words, len)
    );
  });
});
