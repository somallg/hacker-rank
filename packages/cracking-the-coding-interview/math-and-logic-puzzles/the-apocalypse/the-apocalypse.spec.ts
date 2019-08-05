/**
 * Test specs for the-apocalypse problem
 * TheApocalypse
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { theApocalypse } from './the-apocalypse';
import * as fixture from './the-apocalypse.fixture.json';

describe('CrackingTheCodingInterview - TheApocalypse', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<number, number>> fixture)
    .executeTests(
      theApocalypse,
      theApocalypse.name,
      undefined,
      (input: number, output: number) => expect(input).toBeLessThanOrEqual(output)
    );
});
