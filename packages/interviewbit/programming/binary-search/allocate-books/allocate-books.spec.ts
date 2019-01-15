/**
 * Test specs for allocate-books problem
 * AllocateBooks
 */

import {
  createTestExecutor,
  generateArray,
  TestFixture
} from '@challenges/util';

import { allocateBooks } from './allocate-books';
import * as fixture from './allocate-books.fixture.json';

type Input = [number[], number];
type Output = number;

describe('Interviewbit - AllocateBooks', () => {
  // prettier-ignore
  createTestExecutor(<TestFixture<Input, Output>>fixture)
    .executeTests(
      ([books, m]: Input) => allocateBooks(books, m),
      allocateBooks.name,
      (inputSize: number) => [generateArray(inputSize), inputSize]
    );
});
