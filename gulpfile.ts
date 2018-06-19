import chalk from 'chalk';
import * as del from 'del';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as rollup from 'rollup';
import * as rollupTypescript from 'rollup-plugin-typescript2';
import * as yargs from 'yargs';

import { fileSource } from './challenges/tools/file-generator/file.source';
import {
  indexRootSource,
  indexSource
} from './challenges/tools/file-generator/index.source';
import { mainSource } from './challenges/tools/file-generator/main.source';
import { specSource } from './challenges/tools/file-generator/spec.source';
import { getChallengeName } from './challenges/tools/utils/challenge.util';
import { getDirectories } from './challenges/tools/utils/file.util';

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
      input: filePath,
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
    maxWorkers: 2
  };

  if (fileName) {
    optionsCLI = {
      ...optionsCLI,
      runTestsByPath: true,
      testRegex: `${fileName}.spec.ts`
    };
  }

  return require('jest-cli').runCLI(optionsCLI, [process.cwd()]);
});

gulp.task('gen', () => {
  const { d: directory, p: problem } = args;
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

  const filesToGen = [
    { name: `${problem}.spec.ts`, source: specSource(challengeName, problem) },
    { name: `${problem}.ts`, source: fileSource(challengeName, problem) }
  ];

  if (challengeName === 'spoj') {
    filesToGen.push({
      name: `${problem}.main.ts`,
      source: mainSource(challengeName, problem)
    });
  }

  return $
    .file(filesToGen, { src: true })
    .pipe(gulp.dest(`./${directory}/${problem}`));
});

gulp.task('gen:index', () => {
  const { d } = args;

  if (!d) {
    log(chalk.red('Please provide directory name (--d)'));

    return 1;
  }

  const dirs = getDirectories(d);

  const indexFiles = dirs.map((source: string) => ({
    name: `${source}/index.js`,
    source: indexSource(source)
  }));
  indexFiles.push({ name: 'index.js', source: indexRootSource(dirs) });

  return $.file(indexFiles, { src: true }).pipe(gulp.dest(`./${d}`));
});

gulp.task('gen:jsdoc', () =>
  // write gulp task to check if a file already has jsdoc or not
  // if not then add jsdoc to that file
  gulp
    .src([gulpConfig.jsSrc, gulpConfig.jsTools], { base: '.' })
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest('.'))
);

gulp.task('clean', () => {
  log(chalk.blue('Cleaning problem files'));

  const { d } = args;
  if (!d) {
    log(chalk.red('Please provide directory name'));

    return 1;
  }

  return del(`./${d}`);
});

gulp.task('lint', () => {
  log(chalk.blue('Linting source files'));

  return gulp
    .src([gulpConfig.jsSrc, gulpConfig.jsTools], {
      base: '.'
    })
    .pipe($.if(args.verbose, $.print()))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('prettier', () => {
  log(chalk.blue('Prettier source files'));

  return gulp
    .src([gulpConfig.jsSrc, gulpConfig.jsTools], {
      base: '.'
    })
    .pipe($.prettierPlugin(prettierConfig, { filter: true, validate: true }))
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest('.'));
});

gulp.task('enforce', ['lint', 'prettier']);
