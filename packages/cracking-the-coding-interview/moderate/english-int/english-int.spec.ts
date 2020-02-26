/**
 * Test specs for english-int problem
 * EnglishInt
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { englishInt } from './english-int';
import * as fixture from './english-int.fixture.json';

type Input = number;
type Output = string;

describe('CrackingTheCodingInterview - EnglishInt', (): void => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(englishInt, (inputSize: number) =>
    Math.floor(Math.random() * inputSize + 1)
  );
});
