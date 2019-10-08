const { src, dest, watch, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const stylelint = require('gulp-stylelint');
const flatten = require('gulp-flatten');

const STYLE_GLOB = './src/**/*.scss';

const lintStyles = () => {
  return src(STYLE_GLOB).pipe(
    stylelint({
      reporters: [{ formatter: 'string', console: true }],
      failAfterError: process.env.NODE_ENV === 'production',
    })
  );
};

lintStyles.displayName = 'styles:lint';

const compileStyles = () => {
  return src(STYLE_GLOB)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: [require('bourbon').includePaths],
      }).on('error', sass.logError)
    )
    .pipe(postcss())
    .pipe(flatten())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/assets/styles'));
};

compileStyles.displayName = 'styles:compile';

const buildStyles = series(lintStyles, compileStyles);

buildStyles.displayName = 'styles:build';

const watchStyles = () => {
  watch(STYLE_GLOB, series(lintStyles, compileStyles));
};

watchStyles.displayName = 'styles:watch';

module.exports = { compileStyles, watchStyles, lintStyles, buildStyles };
