import ReadWriteStream = NodeJS.ReadWriteStream;
import { lstatSync, readdirSync } from 'fs';
import { basename, join } from 'path';

import chalk from 'chalk';
import * as del from 'del';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as yargs from 'yargs';
// tslint:disable-next-line
import { Arguments } from 'yargs';

import {
  fileSource,
  gulpConfig,
  IGulpLoadPlugins,
  indexRootSource,
  indexSource,
  prettierConfig,
  specSource
} from './index';

const $: IGulpLoadPlugins = gulpLoadPlugins({ lazy: true });
const args: yargs.Arguments = yargs.argv;
const log: Function = console.log.bind(console);

gulp.task('clean', () => {
  log(chalk.red('Cleaning js files'));

  return del([gulpConfig.alljs, gulpConfig.alldef]);
});

gulp.task('test', () => {
  return gulp.src(gulpConfig.src).pipe($.jest.default());
});

gulp.task('gen', () => {
  const { d, p }: Arguments = args;
  if (!d || !p) {
    log(
      chalk.red('Please provide directory name (--d) and problem name (--p)')
    );

    return 1;
  }

  log(chalk.blue('Generating problem files'));

  return $.file(
    [
      { name: `${p}.spec.ts`, source: specSource(p) },
      { name: `${p}.ts`, source: fileSource(p) }
    ],
    { src: true }
  ).pipe(gulp.dest(`./${d}/${p}`));
});

gulp.task('gen:index', () => {
  const { d }: Arguments = args;

  if (!d) {
    log(chalk.red('Please provide directory name (--d)'));

    return 1;
  }

  const isDirectory: (source: string) => boolean = (source: string): boolean =>
    lstatSync(source).isDirectory();

  const getDirectories: (source: string) => string[] = (
    source: string
  ): string[] =>
    readdirSync(source)
      .map((name: string) => join(source, name))
      .filter(isDirectory)
      .map((p: string) => basename(p)); // tslint:disable-line

  const dirs: string[] = getDirectories(d);

  const indexFiles: { name: string; source: string }[] = dirs.map(
    (source: string) => ({
      name: `${source}/index.ts`,
      source: indexSource(source)
    })
  );
  indexFiles.push({ name: 'index.ts', source: indexRootSource(dirs) });

  return $.file(indexFiles, { src: true }).pipe(gulp.dest(`./${d}`));
});

gulp.task('gen:jsdoc', () => {
  // write gulp task to check if a file already has jsdoc or not
  // if not then add jsdoc to that file
  return gulp
    .src([gulpConfig.tsSrc, gulpConfig.tsTools], { base: '.' })
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(gulp.dest('.'));
});

gulp.task('clean', () => {
  log(chalk.blue('Cleaning problem files'));

  const { d }: Arguments = args;
  if (!d) {
    log(chalk.red('Please provide directory name'));

    return 1;
  }

  return del(`./${d}`);
});

gulp.task('lint', () => {
  log(chalk.blue('Linting source files'));

  return gulp
    .src([gulpConfig.tsSrc, gulpConfig.tsTools], { base: '.' })
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>($.tslint({ formatter: 'verbose', fix: !!args.fix }))
    .pipe<ReadWriteStream>($.tslint.report());
});

gulp.task('prettier', () => {
  log(chalk.blue('Prettier source files'));

  return gulp
    .src([gulpConfig.tsSrc, gulpConfig.tsTools], { base: '.' })
    .pipe<ReadWriteStream>(
      $.prettierPlugin(prettierConfig, { filter: true, validate: true })
    )
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(gulp.dest('.'));
});

gulp.task('enforce', ['prettier']);
