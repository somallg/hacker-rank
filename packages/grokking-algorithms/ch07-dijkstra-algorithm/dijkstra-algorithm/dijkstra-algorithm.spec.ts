/**
 * Test specs for dijkstra-algorithm problem
 */

import { solveDijkstraAlgorithm } from './dijkstra-algorithm';

describe('DijkstraAlgorithm', () => {
  describe('solveDijkstraAlgorithm', () => {
    it('should works', () => {
      // tslint:disable
      const graph = {
        start: {
          a: 6,
          b: 2
        },
        a: {
          fin: 1
        },
        b: {
          a: 3,
          fin: 5
        },
        fin: {}
      };

      const costs = {
        a: 6,
        b: 2,
        fin: Infinity
      };

      const parent = {
        a: 'start',
        b: 'start'
      };
      // tslint:enable

      expect(solveDijkstraAlgorithm(graph, costs, parent)).toEqual(
        'start-b-a-fin'
      );
    });

    it('should works', () => {
      // tslint:disable
      const graph = {
        start: {
          a: 5,
          b: 2
        },
        a: {
          c: 4
        },
        b: {
          a: 8,
          d: 7
        },
        c: {
          fin: 3,
          d: 6
        },
        d: {
          fin: 1
        },
        fin: {}
      };

      const costs = {
        a: 5,
        b: 2,
        c: Infinity,
        d: Infinity,
        fin: Infinity
      };

      const parent = {
        a: 'start',
        b: 'start'
      };
      // tslint:enable

      expect(solveDijkstraAlgorithm(graph, costs, parent)).toEqual(
        'start-b-d-fin'
      );
    });
  });
});
