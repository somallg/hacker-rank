import chalk from 'chalk';
import * as del from 'del';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as rollup from 'rollup';
import * as rollupTypescript from 'rollup-plugin-typescript2';
import * as yargs from 'yargs';

import { fileSource } from './packages/tools/file-generator/file.source';
import {
  indexRootSource,
  indexSource
} from './packages/tools/file-generator/index.source';
import { specSource } from './packages/tools/file-generator/spec.source';
import { gulpConfig } from './packages/tools/gulp.config';
import { prettierConfig } from './packages/tools/prettier/prettierrc';
import { getDirectories } from './packages/tools/utils/file.util';

const $: any = gulpLoadPlugins({ lazy: true });
const { argv: args } = yargs;
const log = console.log.bind(console);

gulp.task('default', $.taskListing);

gulp.task('clean:js', () => {
  log(chalk.red('Cleaning js files'));

  return del(gulpConfig.dist);
});

gulp.task('compile', () => {
  const { f } = args;

  if (!f) {
    log(chalk.red('--f is required'));
    return 1;
  }

  log(chalk.blue(`Compiling files matching ${f}`));

  return gulp
    .src([`**/*${f}*.ts`, `!**/*${f}*.spec.ts`], { base: '.', read: false })
    .pipe($.print())
    .pipe(
      $.tap((file: { path: string }) =>
        rollup
          .rollup({
            input: file.path,
            plugins: [
              (rollupTypescript as any)({
                tsconfig: './tsconfig.rollup.json',
                clean: true
              })
            ]
          } as any)
          .then(bundle => {
            return bundle.generate({
              format: 'es'
            });
          })
          .then(({ code }) => {
            console.log(code);
          })
      )
    );
});

gulp.task('test', () => {
  const { f } = args;
  let options = {};
  if (f) {
    options = {
      testMatch: [`**/*${f}*.spec.ts`]
    };
  }

  return gulp.src(gulpConfig.src).pipe($.jest.default(options));
});

gulp.task('gen', () => {
  const { d, p } = args;
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
    .src([gulpConfig.jsSrc, gulpConfig.jsTools, `!${gulpConfig.alldef}`], {
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
    .src([gulpConfig.jsSrc, gulpConfig.jsTools, `!${gulpConfig.alldef}`], {
      base: '.'
    })
    .pipe($.prettierPlugin(prettierConfig, { filter: true, validate: true }))
    .pipe($.if(args.verbose, $.print()))
    .pipe(gulp.dest('.'));
});

gulp.task('enforce', ['lint', 'prettier']);
