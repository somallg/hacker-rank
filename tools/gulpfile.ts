import ReadWriteStream = NodeJS.ReadWriteStream;
import * as path from 'path';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as ts from 'gulp-typescript';
import * as yargs from 'yargs';
import * as del from 'del';
import chalk from 'chalk';
import {ConfigFile, ConfigOptions, Server} from 'karma';

import { gulpConfig } from './gulp.config';
import { GulpLoadPlugins } from './gulp.interface';

const $ = gulpLoadPlugins({ lazy: true }) as GulpLoadPlugins;
const args = yargs.argv;
const tsProject = ts.createProject('./tsconfig.json');
const log = console.log.bind(console);

gulp.task('compile', ['clean'], () => {
  log(`${chalk.blue('Compiling files')} ts --> js`);
  return gulp.src(gulpConfig.tsSrc, { base: '.' })
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(tsProject())
    .pipe(gulp.dest('.'));
});

gulp.task('clean', () => {
  log(chalk.red('Cleaning js files'));
  return del([gulpConfig.alljs, gulpConfig.alldef]);
});

gulp.task('test',(done) => {
  const options: ConfigFile = {
    configFile: path.join(__dirname, '..', 'karma.conf.js')
  };
  new Server(options, done).start();
});

gulp.task('test:headless',(done) => {
  const options: ConfigFile | ConfigOptions = {
    configFile: path.join(__dirname, '..', 'karma.conf.js'),
    browsers: ['PhantomJS'],
    singleRun: true
  };
  new Server(options, done).start();
});
