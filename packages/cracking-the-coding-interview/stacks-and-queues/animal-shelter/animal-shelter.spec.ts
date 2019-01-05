/**
 * Test specs for animal-shelter problem
 * AnimalShelter
 */

import * as ut from '@challenges/util';

import { animalShelter } from './animal-shelter';
import * as fixture from './animal-shelter.fixture.json';

describe('CrackingTheCodingInterview - AnimalShelter', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<number[], string>)
    .executeTests(
      animalShelter
    );
});
