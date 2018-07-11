import chalk from 'chalk';
import * as del from 'del';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as rollup from 'rollup';
import * as rollupTypescript from 'rollup-plugin-typescript2';
import * as yargs from 'yargs';

import { generateSourceFiles } from './challenges/tools/file-generator';
import { getChallengeName } from './challenges/tools/utils/challenge.util';

import { gulpConfig } from './challenges/tools/gulp.config';
import { prettierConfig } from './challenges/tools/prettier/prettierrc';
import { pbcopy } from './challenges/tools/utils/pbcopy';

const $: any = gulpLoadPlugins({ lazy: true });
const { argv: args } = yargs;
const log = console.log.bind(console);

gulp.task('default', $.taskListing);

gulp.task('clean:js', () => {
  log(chalk.red('Cleaning js files'));

  return del(gulpConfig.dist);
});

gulp.task('compile', () => {
  const { f: filePath } = args;

  if (!filePath) {
    log(chalk.red('--f <path to file> is required'));
    return 1;
  }

  log(chalk.blue(`Compiling --f ${filePath}`));

  return rollup
    .rollup({
      input: `${filePath}.ts`,
      plugins: [
        (rollupTypescript as any)({
          clean: true,
          tsconfig: './tsconfig.rollup.json'
        })
      ]
    } as any)
    .then(bundle => {
      return bundle.generate({
        format: 'es'
      });
    })
    .then(({ code }) => {
      return pbcopy(code.replace(/export.*/, ''));
    })
    .then(() =>
      // tslint:disable-next-line
      console.log(
        chalk.green(`Copied compiled version of ${filePath} to clipboard`)
      )
    )
    .catch(err => {
      // tslint:disable-next-line
      console.error(
        new Error(
          `Could not copy compiled content of ${filePath} to clipboard. Reason: ${
            err.message
          }`
        )
      );
    });
});

gulp.task('test', () => {
  const { f: fileName } = args;

  let optionsCLI: any = {
    bail: true,
    maxWorkers: 2
  };

  if (fileName) {
    optionsCLI = {
      ...optionsCLI,
      _: [`${fileName}.spec.ts`],
      runTestsByPath: true
    };
  }

  return require('jest-cli').runCLI(optionsCLI, [process.cwd()]);
});

gulp.task('gen', () => {
  const { d: directory, p: problem, l: lang } = args;
  if (!directory || !problem) {
    log(
      chalk.red('Please provide directory name (--d) and problem name (--p)')
    );

    return 1;
  }

  const challengeName = getChallengeName(directory);

  if (!challengeName) {
    log(chalk.red('Please provide correct directory name (--d)'));
    return 1;
  }

  log(chalk.blue('Generating problem files'));

  return $.file(generateSourceFiles(challengeName, problem, lang), {
    src: true
  }).pipe(gulp.dest(`./${directory}/${problem}`));
});

gulp.task('lint', () => {
  log(chalk.blue('Linting source files'));

  return gulp
    .src([`!${gulpConfig.packagesNodeModules}`, gulpConfig.tsSrc], {
      base: '.'
    })
    .pipe($.if(args.verbose, $.print()))
    .pipe(
      $.tslint({
        formatter: 'verbose'
      })
    )
    .pipe(
      $.tslint.report({
        summarizeFailureOutput: true
      })
    );
});

gulp.task('prettier', () => {
  log(chalk.blue('Prettier source files'));

  return gulp
    .src([`!${gulpConfig.packagesNodeModules}`, gulpConfig.tsSrc], {
      base: '.'
    })
    .pipe($.prettierPlugin(prettierConfig, { filter: true, validate: true }))
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest(file => file.base));
});

gulp.task('enforce', ['lint', 'prettier']);
