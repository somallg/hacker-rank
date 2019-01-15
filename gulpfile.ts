// tslint:disable:no-implicit-dependencies
import chalk from 'chalk';
import del from 'del';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import * as VinylFile from 'vinyl';

import { Bundle, OutputChunk, rollup } from 'rollup';
import rollupPluginTypescript2 from 'rollup-plugin-typescript2';

import * as yargs from 'yargs';

import { gulpConfig, pbcopy, prettierConfig } from './packages/tools';
import ReadWriteStream = NodeJS.ReadWriteStream;

// tslint:disable:no-any
const $: any = gulpLoadPlugins({ lazy: true });
const { argv: args } = yargs;
// tslint:disable:no-console
const log: (arg: string) => void = console.log.bind(console);

gulp.task('default', $.taskListing);

gulp.task('clean:js', () => {
  log(chalk.red('Cleaning js files'));

  return del(gulpConfig.dist);
});

gulp.task('compile', () => {
  const { f: filePath }: yargs.Arguments = args;

  if (!filePath) {
    log(chalk.red('--f <<file path>> is required'));

    return 1;
  }

  log(chalk.blue(`Compiling --f ${filePath}`));

  return (
    // @ts-ignore
    rollup({
      input: filePath,
      plugins: [
        rollupPluginTypescript2({
          clean: true,
          tsconfig: './tsconfig.rollup.json'
        })
      ]
    })
      .then((bundle: Bundle) => bundle.generate({ format: 'es' }))
      .then(({ code }: OutputChunk) =>
        pbcopy(code.replace(/export.*/, '').trim())
      )
      .then(() =>
        log(chalk.green(`Copied compiled version of ${filePath} to clipboard`))
      )
      .catch((err: Error) => {
        // tslint:disable-next-line
        console.error(
          new Error(`Could not compile ${filePath}. Reason: ${err.message}`)
        );
      })
  );
});

gulp.task('test', () => {
  const { f: fileName }: yargs.Arguments = args;

  let optionsCLI: any = {
    bail: true,
    maxWorkers: 2
  };

  if (fileName) {
    optionsCLI = {
      ...optionsCLI,
      _: [`${fileName}.spec.ts`],
      coverage: false,
      runTestsByPath: true
    };
  }

  // tslint:disable-next-line
  return require('jest-cli').runCLI(optionsCLI, [process.cwd()]);
});

gulp.task('lint', () => {
  log(chalk.blue('Linting source files'));

  return gulp
    .src(
      [
        `!${gulpConfig.packagesNodeModules}`,
        `!${gulpConfig.schematicsFiles}`,
        gulpConfig.tsSpec,
        gulpConfig.tsSrc
      ],
      {
        base: '.'
      }
    )
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(
      $.tslint({
        fix: true,
        formatter: 'stylish'
      })
    )
    .pipe<ReadWriteStream>(
      typeof $.tslint.report === 'function' &&
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
    .pipe<ReadWriteStream>(
      $.prettierPlugin(prettierConfig, { filter: true, validate: true })
    )
    .pipe<ReadWriteStream>($.if(args.verbose, $.print()))
    .pipe<ReadWriteStream>(gulp.dest((file: VinylFile) => file.base));
});

gulp.task('enforce', ['lint', 'prettier']);
