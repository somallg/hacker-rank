/**
 * Test specs for allocate-books problem
 * AllocateBooks
 */

import * as ut from '@challenges/util';

import { allocateBooks } from './allocate-books';
import * as fixture from './allocate-books.fixture.json';

describe('Interviewbit - AllocateBooks', () => {
  // prettier-ignore
  ut.createTestExecutor(fixture as ut.TestFixture<[number[], number], number>)
    .executeTests(
      ([books, m]) => allocateBooks(books, m),
      allocateBooks.name,
      inputSize => [ut.generateArray(inputSize), inputSize]
    );
});
