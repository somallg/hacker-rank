/**
 * Test specs for animal-shelter problem
 * AnimalShelter
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { animalShelter } from './animal-shelter';
import * as fixture from './animal-shelter.fixture.json';

describe('CrackingTheCodingInterview - AnimalShelter', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<number[], string>> fixture)
    .executeTests(
      animalShelter
    );
});
