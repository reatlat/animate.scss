var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

gulp.task('animate', function () {
  return gulp.src('animate.scss')
  .pipe($.sass({errLogToConsole: true})) // compilation Scss to Css3
  .pipe($.autoprefixer('last 16 version')) // add vendor prefixes, better use 'last 2 version' but for add -webkit prefix use 16
  .pipe($.csso()) // minification
  .pipe(gulp.dest('css')); // path to dest folder
});