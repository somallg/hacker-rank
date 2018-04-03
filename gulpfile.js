require('ts-node').register({
  typeCheck: true
});
require('./tools/gulpfile');

// const chalk = require('chalk');
// const del = require('del');
// const gulp = require('gulp');
// const $ = require('gulp-load-plugins')({ lazy: true });
// const args = require('yargs').argv;

// const log = console.log.bind(console);

// const { fileSource } = require('./tools/file-generator/file.source');
// const { indexSource } = require('./tools/file-generator/index.source');
// const { indexRootSource } = require('./tools/file-generator/index.source');
// const { specSource } = require('./tools/file-generator/spec.source');
// const { prettierConfig } = require('./tools/prettier/prettierrc');
// const { getDirectories } = require('./tools/utils/file.util');
// const { gulpConfig } = require('./tools/gulp.config');

// gulp.task('clean:js', () => {
//   log(chalk.red('Cleaning js files'));

//   return del([gulpConfig.alljs, gulpConfig.alldef]);
// });

// gulp.task('compile', ['clean:js'], () => {
//   log(`${chalk.blue('Compiling files')} ts --> js`);

//   var tsProject = $.typescript.createProject('./tsconfig.json');

//   return gulp
//     .src([gulpConfig.jsSrc, `!${gulpConfig.jsSpec}`], { base: '.' })
//     .pipe(
//       $.plumber({
//         errorHandler: () => process.exit(1)
//       })
//     )
//     .pipe($.if(args.verbose, $.print()))
//     .pipe(tsProject())
//     .pipe(gulp.dest('.'));
// });

// gulp.task('test', () => {
//   const { f } = args;
//   let options = {};
//   if (f) {
//     options = {
//       testMatch: [`**/*${f}*/*.spec.js`]
//     };
//   }

//   return gulp.src(gulpConfig.src).pipe($.jest.default(options));
// });

// gulp.task('gen', () => {
//   const { d, p } = args;
//   if (!d || !p) {
//     log(
//       chalk.red('Please provide directory name (--d) and problem name (--p)')
//     );

//     return 1;
//   }

//   log(chalk.blue('Generating problem files'));

//   return $.file(
//     [
//       { name: `${p}.spec.js`, source: specSource(p) },
//       { name: `${p}.js`, source: fileSource(p) }
//     ],
//     { src: true }
//   ).pipe(gulp.dest(`./${d}/${p}`));
// });

// gulp.task('gen:index', () => {
//   const { d } = args;

//   if (!d) {
//     log(chalk.red('Please provide directory name (--d)'));

//     return 1;
//   }

//   const dirs = getDirectories(d);

//   const indexFiles = dirs.map(source => ({
//     name: `${source}/index.js`,
//     source: indexSource(source)
//   }));
//   indexFiles.push({ name: 'index.js', source: indexRootSource(dirs) });

//   return $.file(indexFiles, { src: true }).pipe(gulp.dest(`./${d}`));
// });

// gulp.task('gen:jsdoc', () => {
//   // write gulp task to check if a file already has jsdoc or not
//   // if not then add jsdoc to that file
//   return gulp
//     .src([gulpConfig.jsSrc, gulpConfig.jsTools], { base: '.' })
//     .pipe($.if(args.verbose, $.print()))
//     .pipe(gulp.dest('.'));
// });

// gulp.task('clean', () => {
//   log(chalk.blue('Cleaning problem files'));

//   const { d } = args;
//   if (!d) {
//     log(chalk.red('Please provide directory name'));

//     return 1;
//   }

//   return del(`./${d}`);
// });

// gulp.task('lint', () => {
//   log(chalk.blue('Linting source files'));

//   return gulp
//     .src([gulpConfig.jsSrc, gulpConfig.jsTools, `!${gulpConfig.alldef}`], {
//       base: '.'
//     })
//     .pipe($.if(args.verbose, $.print()))
//     .pipe($.eslint())
//     .pipe($.eslint.format())
//     .pipe($.eslint.failAfterError());
// });

// gulp.task('prettier', () => {
//   log(chalk.blue('Prettier source files'));

//   return gulp
//     .src([gulpConfig.jsSrc, gulpConfig.jsTools, `!${gulpConfig.alldef}`], {
//       base: '.'
//     })
//     .pipe($.prettierPlugin(prettierConfig, { filter: true, validate: true }))
//     .pipe($.if(args.verbose, $.print()))
//     .pipe(gulp.dest('.'));
// });

// gulp.task('enforce', ['lint', 'prettier']);
