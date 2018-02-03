import ReadWriteStream = NodeJS.ReadWriteStream;
import * as path from 'path';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as ts from 'gulp-typescript';
import * as yargs from 'yargs';
import * as del from 'del';
import chalk from 'chalk';
import { ConfigFile, ConfigOptions, Server } from 'karma';

import { gulpConfig } from './gulp.config';
import { GulpLoadPlugins } from './gulp.interface';
import { specSource, fileSource } from './file-generator';
import { prettierConfig } from './prettier/';

const $ = gulpLoadPlugins({ lazy: true }) as GulpLoadPlugins;
const args = yargs.argv;
const tsProject = ts.createProject('./tsconfig.json');
const log = console.log.bind(console);

gulp.task('compile', ['clean'], () => {
  log(`${chalk.blue('Compiling files')} ts --> js`);

  return gulp
    .src(gulpConfig.tsSrc, { base: '.' })
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(tsProject())
    .pipe(gulp.dest('.'));
});

gulp.task('clean', () => {
  log(chalk.red('Cleaning js files'));

  return del([gulpConfig.alljs, gulpConfig.alldef]);
});

gulp.task('test', (done) => {
  let options: ConfigFile | ConfigOptions = {
    configFile: path.join(__dirname, '..', 'karma.conf.js')
  };
  if (args.watch && !!args.watch) {
    options = {
      singleRun: true
    };
  }
  new Server(options, done).start();
});

gulp.task('gen', () => {
  const { d, p } = args;
  if (!d || !p) {
    log(
      chalk.red(`Please provide directory name (--d) and problem name (--p)`)
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

gulp.task('clean', () => {
  log(chalk.blue('Cleaning problem files'));

  const { d } = args;
  if (!d) {
    log(chalk.red(`Please provide directory name`));
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
    .pipe<ReadWriteStream>($.prettierPlugin(prettierConfig, { filter: true }))
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(gulp.dest('.'));
});

gulp.task('enforce', ['lint', 'prettier']);
