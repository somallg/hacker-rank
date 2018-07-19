import { strings } from '@angular-devkit/core';

import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicsException,
  template,
  url
} from '@angular-devkit/schematics';

import {
  getChallengeName,
  getFunctionName,
  getUrl
} from '../util/challenge.util';

import { Schema as FileGeneratorOptions } from './schema';

export default function(options: FileGeneratorOptions): Rule {
  const { directory, problem, lang } = options;

  const challengeName = getChallengeName(options.directory);
  if (!challengeName) {
    throw new SchematicsException(
      'Invalid options, "directory" must be correct'
    );
  }

  const functionName = getFunctionName(challengeName, problem);
  const challengeUrl = getUrl(challengeName, problem);

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
