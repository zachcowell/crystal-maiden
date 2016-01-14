var gulp        = require('gulp');
var config      = require('../../config').browserSync;
var browserSync = require('browser-sync'); // synchronised browser testing;

// run the build task and start a server with BrowserSync;
gulp.task('browserSync', ['build'], function() {
  browserSync(config);
});
