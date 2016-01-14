var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../../config.js');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('clean', [
      'html',
      'scss',
      'scripts',
      'images',
      'extras',
      'bower',
    ],
    'replace-string',
    callback);
});
