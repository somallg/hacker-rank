import { Rule, Tree } from '@angular-devkit/schematics';

import { Schema as TestFixtureOptions } from './schema';

export default function(options: TestFixtureOptions): Rule {
  const { directory } = options;

  return (tree: Tree) => {
    tree.getDir(directory).visit(filePath => {
      if (!filePath.endsWith('.json')) {
        return;
      }

      const content = tree.read(filePath);
      if (!content) {
        return;
      }

      const fixtureData = JSON.parse(content.toString());

      if (!fixtureData.testCategories) {
        const newFixture = {
          name: fixtureData.name,
          testCategories: [
            {
              name: 'Example Tests',
              testCases: fixtureData.exampleTests
            },
            {
              name: 'Correctness Tests',
              testCases: fixtureData.correctnessTests
            },
            {
              name: 'Performance Tests',
              testCases: fixtureData.performanceTests.map((t: any) => ({
                ...t,
                timeLimit: 100
              }))
            }
          ]
        };

        tree.overwrite(filePath, JSON.stringify(newFixture, null, 2));
      }
    });

    return tree;
  };
}
