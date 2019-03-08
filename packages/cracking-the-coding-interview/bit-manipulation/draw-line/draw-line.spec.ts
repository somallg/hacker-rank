/**
 * Test specs for draw-line problem
 * DrawLine
 */

import { createTestExecutor, TestFixture } from '@challenges/util';

import { drawLine } from './draw-line';
import * as fixture from './draw-line.fixture.json';

type Input = [number[], number, number, number, number];
type Output = number[];

describe('CrackingTheCodingInterview - DrawLine', () => {
  // prettier-ignore
  // @ts-ignore
  createTestExecutor(<TestFixture<Input, Output>> fixture)
    .executeTests(
      ([screen, w, x1, x2, y]: Input) => drawLine(screen, w, x1, x2, y),
      drawLine.name
    );
});
