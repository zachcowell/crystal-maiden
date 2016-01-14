var gulp   = require('gulp');
var config = require('../../config.js').scripts;
var size   = require('gulp-size');

// Simply copy js to dist
gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
