import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

// SchematicTestRunner needs an absolute path to the collection to test.
const collectionPath = path.join(__dirname, '../collection.json');

describe('file-generator', () => {
  it('should throw error when no required options is given', () => {
    // We test that
    const runner = new SchematicTestRunner('schematics', collectionPath);
    expect(() =>
      runner.runSchematic('file-generator', {}, Tree.empty())
    ).toThrow();
  });

  it('should throw error when only 1 required option is given', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    expect(() =>
      runner.runSchematic(
        'file-generator',
        { directory: 'directory' },
        Tree.empty()
      )
    ).toThrow();
  });

  it('should throw error when only directory is incorrect path', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    expect(() =>
      runner.runSchematic(
        'file-generator',
        { directory: 'directory', problem: 'problem-name' },
        Tree.empty()
      )
    ).toThrow();
  });

  it('should work and generate 3 files for typescript lang', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic(
      'file-generator',
      { directory: 'directory/challenge', problem: 'problem-name' },
      Tree.empty()
    );

    expect(tree.files.length).toEqual(3);
    expect(tree.files.sort()).toEqual([
      '/directory/challenge/problem-name/problem-name.fixture.json',
      '/directory/challenge/problem-name/problem-name.spec.ts',
      '/directory/challenge/problem-name/problem-name.ts'
    ]);
  });

  it('should work and generate 2 files for python lang', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic(
      'file-generator',
      {
        directory: 'directory/challenge',
        lang: 'python',
        problem: 'problem-name'
      },
      Tree.empty()
    );

    expect(tree.files.length).toEqual(2);
    expect(tree.files.sort()).toEqual([
      '/directory/challenge/problem-name/problem_name.py',
      '/directory/challenge/problem-name/problem_name_spec.py'
    ]);
  });
});
