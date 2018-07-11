import { SourceFileConfig, SourceFn } from './type';

import { getFunctionName } from './function.source';
import { getUrl } from './url.source';

import { pyFileSource, pySpecSource } from './python';
import { tsFileSource, tsFixtureSource, tsSpecSource } from './typescript';

import { snakelize } from '../utils/string.util';

function generateFileFromSourceFn(
  sourceFn: SourceFn,
  challengeName: string,
  problem: string
): string {
  const functionName = getFunctionName(challengeName, problem);
  const url = getUrl(challengeName, problem);

  return sourceFn({ challengeName, problem, functionName, url });
}

function getSourceFileConfigList(
  challengeName: string,
  problem: string,
  lang = 'typescript'
): SourceFileConfig[] {
  return {
    python: [
      {
        name: `${snakelize(problem)}.py`,
        sourceFn: pyFileSource
      },
      {
        name: `${snakelize(problem)}_spec.py`,
        sourceFn: pySpecSource
      }
    ],
    typescript: [
      {
        name: `${problem}.ts`,
        sourceFn: tsFileSource
      },
      {
        name: `${problem}.fixture.json`,
        sourceFn: tsFixtureSource
      },
      {
        name: `${problem}.spec.ts`,
        sourceFn: tsSpecSource
      }
    ]
  }[lang];
}

function generateSourceFiles(
  challengeName: string,
  problem: string,
  lang: string
) {
  return getSourceFileConfigList(challengeName, problem, lang).map(
    ({ name, sourceFn }) => ({
      name,
      source: generateFileFromSourceFn(sourceFn, challengeName, problem)
    })
  );
}

export { generateFileFromSourceFn, generateSourceFiles };
