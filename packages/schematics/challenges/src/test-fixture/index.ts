import { Path } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';

import { Schema as TestFixtureOptions } from './schema';

// tslint:disable-next-line
export default function(options: TestFixtureOptions): Rule {
  const { directory }: TestFixtureOptions = options;

  return (tree: Tree): Tree => {
    tree.getDir(directory).visit((filePath: Path) => {
      if (!filePath.endsWith('.json')) {
        return;
      }

      const content: Buffer | null = tree.read(filePath);
      if (!content) {
        return;
      }

      const fixtureData: object = JSON.parse(content.toString());

      // @ts-ignore
      if (!fixtureData.testCategories) {
        const newFixture: object = {
          // @ts-ignore
          name: fixtureData.name,
          testCategories: [
            {
              name: 'Example Tests',
              // @ts-ignore
              testCases: fixtureData.exampleTests
            },
            {
              name: 'Correctness Tests',
              // @ts-ignore
              testCases: fixtureData.correctnessTests
            },
            {
              name: 'Performance Tests',
              // @ts-ignore
              testCases: fixtureData.performanceTests
            }
          ]
        };

        tree.overwrite(filePath, JSON.stringify(newFixture, undefined, 2));
      }
    });

    return tree;
  };
}
