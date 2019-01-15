/**
 * Test specs for justified-text problem
 * JustifiedText
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { justifiedText } from './justified-text';
import * as fixture from './justified-text.fixture.json';

type Input = [string[], number];
type Output = string[];

describe('Interviewbit - JustifiedText', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
        .executeTests(([words, len]: Input) => justifiedText(words, len), justifiedText.name);
});
