/**
 * Test specs for magic-index problem
 * MagicIndex
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { magicIndex } from './magic-index';
import * as fixture from './magic-index.fixture.json';

describe('CrackingTheCodingInterview - MagicIndex', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<number[], number>> fixture)
    .executeTests(
      magicIndex
    );
});
