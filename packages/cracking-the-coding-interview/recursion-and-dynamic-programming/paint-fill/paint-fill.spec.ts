/**
 * Test specs for paint-fill problem
 * PaintFill
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { paintFill } from './paint-fill';
import * as fixture from './paint-fill.fixture.json';

type Input = {
  screen: number[][];
  coordination: number[];
  newColor: number;
};

type Output = number[][];

describe('CrackingTheCodingInterview - PaintFill', () => {
  createTestExecutor(<TestFixture<Input, Output>>fixture).executeTests(
    ({ screen, coordination, newColor }: Input) => paintFill(screen, coordination, newColor),
    paintFill.name
  );
});
