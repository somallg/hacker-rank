import chalk from 'chalk';
import * as del from 'del';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as yargs from 'yargs';
// tslint:disable-next-line

import {
  fileSource,
  indexSource,
  indexRootSource,
  specSource
} from './file-generator';

import { prettierConfig } from './prettier';

import { getDirectories } from './utils';

import { gulpConfig, IGulpLoadPlugins } from './index';

const $: IGulpLoadPlugins = gulpLoadPlugins({ lazy: true });
const args: yargs.Arguments = yargs.argv;
const log: Function = console.log.bind(console);

gulp.task('clean:js', () => {
  log(chalk.red('Cleaning js files'));

  return del([gulpConfig.alljs, gulpConfig.alldef]);
});

gulp.task('compile', ['clean:js'], () => {
  log(`${chalk.blue('Compiling files')} ts --> js`);

  const tsProject: Function = $.typescript.createProject('./tsconfig.json');

  return gulp
    .src([gulpConfig.tsSrc, `!${gulpConfig.tsSpec}`], { base: '.' })
    .pipe(
      $.plumber({
        errorHandler: () => process.exit(1)
      })
    )
    .pipe($.if(args.verbose, $.print()))
    .pipe(tsProject())
    .pipe(gulp.dest('.'));
});

gulp.task('test', () => {
  return gulp.src(gulpConfig.src).pipe($.jest.default());
});

gulp.task('gen', () => {
  const { d, p }: yargs.Arguments = args;
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
  const { d }: yargs.Arguments = args;

  if (!d) {
    log(chalk.red('Please provide directory name (--d)'));

    return 1;
  }

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
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest('.'));
});

gulp.task('clean', () => {
  log(chalk.blue('Cleaning problem files'));

  const { d }: yargs.Arguments = args;
  if (!d) {
    log(chalk.red('Please provide directory name'));

    return 1;
  }

  return del(`./${d}`);
});

gulp.task('lint', () => {
  log(chalk.blue('Linting source files'));

  return gulp
    .src([gulpConfig.tsSrc, gulpConfig.tsTools, `!${gulpConfig.alldef}`], {
      base: '.'
    })
    .pipe($.if(args.verbose, $.print()))
    .pipe($.tslint({ formatter: 'verbose', fix: !!args.fix }))
    .pipe($.tslint.report());
});

gulp.task('prettier', () => {
  log(chalk.blue('Prettier source files'));

  return gulp
    .src([gulpConfig.tsSrc, gulpConfig.tsTools, `!${gulpConfig.alldef}`], {
      base: '.'
    })
    .pipe($.prettierPlugin(prettierConfig, { filter: true, validate: true }))
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest('.'));
});

gulp.task('enforce', ['lint', 'prettier']);
