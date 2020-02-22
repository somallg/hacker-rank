import { strings } from '@angular-devkit/core';

import { apply, chain, mergeWith, move, noop, Rule, template, url } from '@angular-devkit/schematics';

import { getChallengeName, getFunctionName, getUrl } from '../util/challenge.util';

import { Schema as FileGeneratorOptions } from './schema';

// tslint:disable-next-line
export default function(options: FileGeneratorOptions): Rule {
  const { directory, problem, lang }: FileGeneratorOptions = options;

  const challengeName: string = getChallengeName(options.directory);
  if (!challengeName || !problem) {
    // tslint:disable-next-line
    console.log(
      `Usage:
         --directory (-d): path to directory (required)
         --problem   (-p): problem name (required)
         --language  (-l): programming language (optional, default value: typescript)`
    );

    return noop();
  }

  const functionName: string = getFunctionName(challengeName, problem);
  const challengeUrl: string = getUrl(challengeName, problem);

  return chain([
    mergeWith(
      apply(url(`./files/${lang}`), [
        template({
          ...strings,
          challengeName,
          challengeUrl,
          functionName,
          problem
        }),
        move(`${directory}/${problem}`)
      ])
    )
  ]);
}
