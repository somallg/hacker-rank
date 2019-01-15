import { Tree } from '@angular-devkit/schematics';
// tslint:disable:no-submodule-imports
import {
  SchematicTestRunner,
  UnitTestTree
} from '@angular-devkit/schematics/testing';
import * as path from 'path';

// SchematicTestRunner needs an absolute path to the collection to test.
const collectionPath: string = path.join(__dirname, '../collection.json');

describe('fix-spec-file', () => {
  it('should throw error when no option is given', () => {
    const runner: SchematicTestRunner = new SchematicTestRunner(
      'schematics',
      collectionPath
    );
    expect(() =>
      runner.runSchematic('fix-spec-file', {}, Tree.empty())
    ).toThrow();
  });

  it('should work and generate 3 files for typescript lang', () => {
    const runner: SchematicTestRunner = new SchematicTestRunner(
      'schematics',
      collectionPath
    );
    const tree: UnitTestTree = runner.runSchematic(
      'fix-spec-file',
      { directory: 'directory/challenge', problem: 'problem-name' },
      Tree.empty()
    );

    expect(tree.files.length).toEqual(0);
  });
});
