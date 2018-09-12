/**
 * Test specs for greatest-common-divisor problem
 */

import * as ut from '@challenges/util';

import { greatestCommonDivisor } from './greatest-common-divisor';
import * as fixture from './greatest-common-divisor.fixture.json';

describe('Interviewbit - GreatestCommonDivisor', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number, number], number>)
    .executeTests(
      ([m, n]) => greatestCommonDivisor(m, n),
      greatestCommonDivisor.name,
      inputSize => [inputSize, inputSize >>> 1]
  );
});
